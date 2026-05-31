import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { mediaUrl } from '../lib/mediaUrl'

function formatMoney(cents) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

export function ListingDetailPage() {
  const { id } = useParams()
  const [listing, setListing] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api(`/api/listings/${id}`)
      .then((data) => setListing(data.listing))
      .catch((e) => setError(e.message))
  }, [id])

  if (error) {
    return (
      <div className="px-6 py-20 md:px-10">
        <p className="text-[14px] text-red-800/90">{error}</p>
        <Link to="/marketplace" className="mt-4 inline-block text-[13px] underline">
          Back to marketplace
        </Link>
      </div>
    )
  }

  if (!listing) {
    return (
      <div className="px-6 py-20 md:px-10">
        <p className="text-[#252b32]/50">Loading…</p>
      </div>
    )
  }

  return (
    <div className="bg-[#fcf7ef] px-6 pb-24 pt-10 md:px-10 md:pt-14">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden bg-[#d8d3cb] lg:aspect-auto lg:min-h-[420px]">
          {listing.imageUrl ? (
            <img src={mediaUrl(listing.imageUrl)} alt="" className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div>
          <p className="text-[11px] tracking-[0.16em] text-[#252b32]/50">{listing.category}</p>
          <h1 className="mt-2 text-[30px] font-light leading-tight text-[#252b32] md:text-[36px]">
            {listing.title}
          </h1>
          <p className="mt-4 text-[28px] font-light text-[#252b32]">
            {formatMoney(listing.priceCents)}
          </p>
          <p className="mt-2 text-[14px] text-[#252b32]/60">{listing.location}</p>
          <div className="mt-8 border-t border-[#252b32]/10 pt-8">
            <p className="text-[15px] leading-[1.85] text-[#252b32]/75 whitespace-pre-wrap">
              {listing.description}
            </p>
          </div>
          <p className="mt-8 text-[13px] text-[#252b32]/50">
            Listed by {listing.seller.name || listing.seller.email}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${listing.seller.email}?subject=Enquiry:%20${encodeURIComponent(listing.title)}`}
              className="inline-block bg-[#252b32] px-8 py-3 text-[11px] tracking-[0.14em] text-[#fcf7ef]"
            >
              ENQUIRE TO PURCHASE
            </a>
            <Link
              to="/marketplace"
              className="inline-block border border-[#252b32]/30 px-8 py-3 text-[11px] tracking-[0.14em] text-[#252b32]"
            >
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
