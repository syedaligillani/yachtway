const YACHTS = [
  { name: 'Serenity', location: 'Monaco, France', beds: 5, guests: 12, image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&h=400&fit=crop' },
  { name: 'Horizon', location: 'Santorini, Greece', beds: 4, guests: 10, image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&h=400&fit=crop' },
  { name: 'Azure Dream', location: 'Amalfi Coast, Italy', beds: 4, guests: 8, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=400&fit=crop' },
]

const PROPERTIES = [
  { name: 'Villa Maris', location: 'French Riviera', beds: 5, guests: 10, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop' },
  { name: 'Coastal Retreat', location: 'Algarve, Portugal', beds: 4, guests: 8, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop' },
  { name: 'Summit Chalet', location: 'Verbier, Switzerland', beds: 5, guests: 12, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop' },
]

function AssetCard({ item, bedsLabel = 'beds' }) {
  return (
    <a href="#" className="group block">
      <div className="relative aspect-[3/2] overflow-hidden bg-[#d8d3cb]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[16px] font-normal tracking-[0.02em] text-[#252b32]">{item.name}</h3>
        <p className="mt-1 text-[13px] text-[#252b32]/60">
          {item.location}
          <span className="ml-3 inline-flex items-center gap-3 text-[12px] text-[#252b32]/50">
            <span>
              {item.beds} {bedsLabel}
            </span>
            <span>{item.guests} guests</span>
          </span>
        </p>
      </div>
    </a>
  )
}

export function Portfolio() {
  return (
    <section className="bg-[#fcf7ef] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 text-center">
          <p className="text-[11px] tracking-[0.18em] text-[#252b32]/60">PORTFOLIO</p>
          <h2 className="mt-3 text-[32px] font-light leading-[1.25] text-[#252b32] md:text-[38px]">
            Yachts &amp; residences
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-[1.8] text-[#252b32]/65">
            Same template as agreed: three featured yachts above, three featured
            properties below — replace placeholders with your supplied photography.
          </p>
        </div>

        <p className="mb-6 text-center text-[11px] tracking-[0.14em] text-[#252b32]/50">
          TOP — YACHTS
        </p>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {YACHTS.map((item) => (
            <AssetCard key={item.name} item={item} bedsLabel="cabins" />
          ))}
        </div>

        <p className="mb-6 mt-16 text-center text-[11px] tracking-[0.14em] text-[#252b32]/50">
          BOTTOM — PROPERTIES
        </p>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((item) => (
            <AssetCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
