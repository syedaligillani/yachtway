import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import multer from 'multer'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const uploadsDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

const prisma = new PrismaClient()
const app = express()
const PORT = Number(process.env.PORT) || 3001
const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-me'

const allowedMime = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase() || '.jpg'
    const safe = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}${ext}`
    cb(null, safe)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (allowedMime.has(file.mimetype)) cb(null, true)
    else cb(new Error('Only JPEG, PNG, WebP, or GIF images are allowed'))
  },
})

app.use(cors({ origin: true, credentials: true }))
app.use('/uploads', express.static(uploadsDir))
app.use(express.json())

function authMiddleware(req, res, next) {
  const h = req.headers.authorization
  const token = h?.startsWith('Bearer ') ? h.slice(7) : null
  if (!token) {
    req.userId = null
    return next()
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.userId = payload.sub
  } catch {
    req.userId = null
  }
  next()
}

function requireAuth(req, res, next) {
  if (!req.userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }
    const existing = await prisma.user.findUnique({ where: { email: String(email).toLowerCase() } })
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' })
    }
    const passwordHash = await bcrypt.hash(String(password), 10)
    const user = await prisma.user.create({
      data: {
        email: String(email).toLowerCase(),
        passwordHash,
        name: name ? String(name) : null,
      },
    })
    const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '7d' })
    return res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Server error' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }
    const user = await prisma.user.findUnique({
      where: { email: String(email).toLowerCase() },
    })
    if (!user || !(await bcrypt.compare(String(password), user.passwordHash))) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }
    const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '7d' })
    return res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Server error' })
  }
})

app.get('/api/me', authMiddleware, async (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, name: true },
  })
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  return res.json({ user })
})

function handleUpload(req, res, next) {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message || 'Upload failed' })
    }
    next()
  })
}

app.post('/api/upload', authMiddleware, requireAuth, handleUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }
  return res.json({ url: `/uploads/${req.file.filename}` })
})

app.get('/api/listings', async (req, res) => {
  const category = req.query.category ? String(req.query.category) : undefined
  const where = category ? { category } : {}
  const listings = await prisma.listing.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: { seller: { select: { id: true, name: true, email: true } } },
  })
  return res.json({ listings })
})

app.get('/api/listings/:id', async (req, res) => {
  const listing = await prisma.listing.findUnique({
    where: { id: req.params.id },
    include: { seller: { select: { id: true, name: true, email: true } } },
  })
  if (!listing) {
    return res.status(404).json({ error: 'Not found' })
  }
  return res.json({ listing })
})

app.post('/api/listings', authMiddleware, requireAuth, async (req, res) => {
  try {
    const { title, description, priceCents, location, category, imageUrl } = req.body
    if (!title || !description || priceCents == null || !location || !category) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const listing = await prisma.listing.create({
      data: {
        title: String(title),
        description: String(description),
        priceCents: Math.max(0, parseInt(String(priceCents), 10) || 0),
        location: String(location),
        category: String(category).toUpperCase(),
        imageUrl: imageUrl ? String(imageUrl) : null,
        sellerId: req.userId,
      },
      include: { seller: { select: { id: true, name: true, email: true } } },
    })
    return res.status(201).json({ listing })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Server error' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`API http://localhost:${PORT}`)
})
