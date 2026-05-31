const EDITORIAL_ITEMS = [
  {
    title: 'Finding their island escape',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=750&fit=crop',
    tall: true,
  },
  {
    title: 'Racing the Riviera',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    title: 'Croatia, made simple',
    image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    title: 'Barcelona — a sunlit harbour',
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&h=750&fit=crop',
    tall: true,
  },
  {
    title: 'Discover the Amalfi coastline',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop',
    tall: false,
  },
]

function EditorialCard({ item }) {
  return (
    <a href="#" className="group relative block overflow-hidden">
      <div className={`relative ${item.tall ? 'aspect-[3/4]' : 'aspect-[3/2]'} overflow-hidden bg-[#d8d3cb]`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[14px] font-normal leading-[1.4] text-white">
            {item.title}
          </p>
        </div>
      </div>
    </a>
  )
}

export function Editorial() {
  return (
    <section className="bg-[#fcf7ef] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:row-span-2">
            <EditorialCard item={EDITORIAL_ITEMS[0]} />
          </div>

          <div>
            <EditorialCard item={EDITORIAL_ITEMS[1]} />
          </div>

          <div>
            <EditorialCard item={EDITORIAL_ITEMS[2]} />
          </div>

          <div className="md:row-span-2">
            <EditorialCard item={EDITORIAL_ITEMS[3]} />
          </div>

          <div>
            <EditorialCard item={EDITORIAL_ITEMS[4]} />
          </div>
        </div>
      </div>
    </section>
  )
}
