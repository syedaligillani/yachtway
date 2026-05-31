import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import { mediaUrl } from '../lib/mediaUrl'

function formatMoney(cents) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

export function MarketplacePage() {
  const [listings, setListings] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('YACHT')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    api(`/api/listings?category=${encodeURIComponent(category)}`)
      .then((data) => {
        if (!cancelled) setListings(data.listings)
      })
      .catch((e) => {
        if (!cancelled) setError(e.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [category])

  return (
    <div className="bg-[#fcf7ef] px-6 pb-24 pt-10 md:px-10 md:pt-14">
      <div className="mx-auto max-w-[1320px]">
        <p className="text-[11px] tracking-[0.18em] text-[#252b32]/60">MARKETPLACE</p>
        <h1 className="mt-2 text-[32px] font-light text-[#252b32] md:text-[40px]">
          Buy &amp; sell fractional interests
        </h1>
        <p className="mt-4 max-w-[640px] text-[14px] leading-[1.8] text-[#252b32]/65">
          Browse curated listings. We&apos;re starting with yachts; property fractions use the same
          flow — switch the filter when listings are live.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {['YACHT', 'PROPERTY'].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`border px-5 py-2 text-[11px] tracking-[0.12em] transition-colors ${
                category === c
                  ? 'border-[#252b32] bg-[#252b32] text-[#fcf7ef]'
                  : 'border-[#252b32]/25 text-[#252b32] hover:border-[#252b32]/50'
              }`}
            >
              {c === 'YACHT' ? 'Yachts' : 'Property'}
            </button>
          ))}
          <Link
            to="/sell"
            className="border border-[#293826] bg-[#293826] px-5 py-2 text-[11px] tracking-[0.12em] text-[#f3f0e8] hover:opacity-90"
          >
            List an asset
          </Link>
        </div>

        {error ? (
          <p className="mt-10 text-[14px] text-red-800/90">
            {error} — start the API:{' '}
            <code className="rounded bg-[#252b32]/10 px-1">cd server && npm run dev</code>
          </p>
        ) : null}

        {loading ? (
          <p className="mt-12 text-[14px] text-[#252b32]/50">Loading listings…</p>
        ) : (
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((item) => (
              <li key={item.id}>
                <Link to={`/marketplace/${item.id}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#d8d3cb]">
                    {item.imageUrl ? (
                      <img
                        src={mediaUrl(item.imageUrl)}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <h2 className="mt-4 text-[16px] font-normal text-[#252b32]">{item.title}</h2>
                  <p className="mt-1 text-[13px] text-[#252b32]/55">{item.location}</p>
                  <p className="mt-2 text-[15px] text-[#252b32]">{formatMoney(item.priceCents)}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!loading && listings.length === 0 && !error ? (
          <p className="mt-12 text-[14px] text-[#252b32]/55">
            No listings in this category yet.{' '}
            <Link to="/sell" className="underline decoration-[#252b32]/30">
              Be the first to list
            </Link>
            .
          </p>
        ) : null}
      </div>
    </div>
  )
}
