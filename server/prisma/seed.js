import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'demo@blueskyfractions.com'
  const passwordHash = await bcrypt.hash('demo1234', 10)
  const seller = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, passwordHash, name: 'Demo Seller' },
  })

  const samples = [
    {
      title: 'Serenity — fractional share',
      description:
        '64m motor yacht share in the Mediterranean. Concierge scheduling, professional crew, turnkey maintenance.',
      priceCents: 250000_00,
      location: 'Monaco',
      category: 'YACHT',
      imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=500&fit=crop',
    },
    {
      title: 'Horizon — week blocks',
      description:
        'Sailing yacht fractional program. Flexible weeks per season, transparent operating costs.',
      priceCents: 89000_00,
      location: 'Santorini, Greece',
      category: 'YACHT',
      imageUrl: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=500&fit=crop',
    },
    {
      title: 'Azure Dream — co-ownership',
      description:
        'Luxury motor yacht co-ownership. Ideal for families seeking variety without full capital commitment.',
      priceCents: 175000_00,
      location: 'Amalfi Coast, Italy',
      category: 'YACHT',
      imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=500&fit=crop',
    },
  ]

  await prisma.listing.deleteMany({ where: { sellerId: seller.id } })
  for (const s of samples) {
    await prisma.listing.create({
      data: { ...s, sellerId: seller.id },
    })
  }

  console.log('Seed OK — demo login:', email, '/ demo1234')
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
