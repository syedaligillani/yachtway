import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { api, uploadListingImage } from '../lib/api'

export function SellPage() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const fileRef = useRef(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('YACHT')
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null)
      return
    }
    const u = URL.createObjectURL(file)
    setPreviewUrl(u)
    return () => URL.revokeObjectURL(u)
  }, [file])

  function pickFiles(list) {
    const f = list?.[0]
    if (f && f.type.startsWith('image/')) setFile(f)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setPending(true)
    const priceCents = Math.round(parseFloat(price) * 100)
    if (Number.isNaN(priceCents) || priceCents <= 0) {
      setError('Enter a valid price')
      setPending(false)
      return
    }
    try {
      let imageUrl = null
      if (file) {
        const up = await uploadListingImage(file)
        imageUrl = up.url
      }
      const data = await api('/api/listings', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          priceCents,
          location,
          category,
          imageUrl,
        }),
      })
      navigate(`/marketplace/${data.listing.id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setPending(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-6">
        <p className="text-[14px] text-[#252b32]/45">Loading…</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-[calc(100svh-88px)] bg-[#fcf7ef]">
        <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-[1200px] lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#293826] px-8 py-16 text-[#f3f0e8] md:px-14">
            <p className="text-[10px] tracking-[0.22em] text-[#f3f0e8]/55">LISTINGS</p>
            <h1 className="mt-4 text-[34px] font-light leading-[1.12] md:text-[42px]">List an asset</h1>
            <p className="mt-6 max-w-[400px] text-[15px] leading-[1.8] text-[#f3f0e8]/75">
              Sign in to publish yacht or property fractions. Buyers reach you through the marketplace
              and email enquiries.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/login"
                className="rounded-sm bg-[#f3f0e8] px-8 py-3 text-[11px] font-medium tracking-[0.14em] text-[#293826]"
              >
                LOG IN
              </Link>
              <Link
                to="/signup"
                className="rounded-sm border border-[#f3f0e8]/40 px-8 py-3 text-[11px] tracking-[0.14em] text-[#f3f0e8]"
              >
                SIGN UP
              </Link>
            </div>
            <Link to="/" className="mt-12 text-[11px] tracking-[0.14em] text-[#f3f0e8]/45 hover:text-[#f3f0e8]/70">
              ← Back to site
            </Link>
          </div>
          <div className="hidden items-center justify-center border-l border-[#252b32]/10 bg-[#f7f2ea] lg:flex">
            <p className="max-w-[280px] text-center text-[13px] leading-relaxed text-[#252b32]/45">
              Photography and legal copy should reflect your compliance workflow. Payments are not
              processed in-app yet.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100svh-88px)] bg-[#f4efe6]">
      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-[38%_62%]">
        <aside className="border-b border-[#252b32]/10 bg-[#293826] px-8 py-12 text-[#f3f0e8] md:px-10 md:py-16 lg:border-b-0 lg:border-r">
          <p className="text-[10px] tracking-[0.22em] text-[#f3f0e8]/55">NEW LISTING</p>
          <h1 className="mt-3 text-[30px] font-light leading-tight md:text-[36px]">Showcase your offering</h1>
          <ul className="mt-8 space-y-4 text-[13px] leading-[1.65] text-[#f3f0e8]/72">
            <li className="flex gap-3">
              <span className="text-[#f3f0e8]/35">01</span>
              Clear title and location build trust.
            </li>
            <li className="flex gap-3">
              <span className="text-[#f3f0e8]/35">02</span>
              Upload a hero image from your device (JPEG, PNG, WebP, GIF — max 8MB).
            </li>
            <li className="flex gap-3">
              <span className="text-[#f3f0e8]/35">03</span>
              Price is indicative (GBP); legal completion happens outside this MVP.
            </li>
          </ul>
        </aside>

        <div className="bg-[#fcf7ef] px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-[520px] rounded-sm border border-[#252b32]/[0.08] bg-[#fffcf5] p-8 shadow-[0_20px_40px_-28px_rgba(37,43,50,0.2)] md:p-10">
            <h2 className="text-[22px] font-light text-[#252b32]">Listing details</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-[#252b32]/55">
              Fields marked * are required. Your photo is stored on the API server when you publish.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
                  TITLE *
                </label>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[#252b32]/35 focus:ring-1 focus:ring-[#252b32]/12"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
                  DESCRIPTION *
                </label>
                <textarea
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-y rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] leading-relaxed outline-none focus:border-[#252b32]/35 focus:ring-1 focus:ring-[#252b32]/12"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
                    PRICE (GBP) *
                  </label>
                  <input
                    required
                    type="number"
                    min="1"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[#252b32]/35"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
                    CATEGORY *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[#252b32]/35"
                  >
                    <option value="YACHT">Yacht</option>
                    <option value="PROPERTY">Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
                  LOCATION *
                </label>
                <input
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[#252b32]/35"
                />
              </div>

              <div>
                <span className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
                  HERO IMAGE
                </span>
                <div
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') fileRef.current?.click()
                  }}
                  onDragEnter={(e) => {
                    e.preventDefault()
                    setDragOver(true)
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    setDragOver(false)
                    pickFiles(e.dataTransfer.files)
                  }}
                  onClick={() => fileRef.current?.click()}
                  className={`cursor-pointer rounded-sm border-2 border-dashed px-4 py-8 text-center transition-colors ${
                    dragOver
                      ? 'border-[#293826] bg-[#293826]/5'
                      : 'border-[#252b32]/18 bg-white/60 hover:border-[#252b32]/28'
                  }`}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="hidden"
                    onChange={(e) => pickFiles(e.target.files)}
                  />
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt=""
                      className="mx-auto max-h-48 rounded-sm object-contain"
                    />
                  ) : (
                    <p className="text-[13px] text-[#252b32]/55">
                      Drag &amp; drop an image here, or <span className="text-[#252b32] underline">browse</span>
                    </p>
                  )}
                  <p className="mt-2 text-[11px] text-[#252b32]/40">Phone camera supported · max 8MB</p>
                  {file ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setFile(null)
                      }}
                      className="mt-3 text-[11px] tracking-[0.1em] text-[#252b32]/60 underline"
                    >
                      Remove image
                    </button>
                  ) : null}
                </div>
              </div>

              {error ? (
                <p className="rounded-sm border border-red-200/80 bg-red-50/90 px-3 py-2 text-[13px] text-red-900/85">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-sm bg-[#252b32] py-3.5 text-[11px] font-medium tracking-[0.16em] text-[#fcf7ef] disabled:opacity-50"
              >
                {pending ? 'PUBLISHING…' : 'PUBLISH LISTING'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
