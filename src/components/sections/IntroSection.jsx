/**
 * Replaces struck-through "Escape. Explore. Belong." block per client brief.
 * Reference: image + copy column with CTA (yacht + property positioning).
 */
export function IntroSection() {
  return (
    <section className="bg-[#fcf7ef] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d3cb]">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&h=675&fit=crop"
              alt="Yacht on open water"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 right-0 w-[45%] max-w-[220px] overflow-hidden border-4 border-[#fcf7ef] shadow-lg sm:-bottom-8 sm:max-w-[260px]">
            <div className="aspect-[3/4] bg-[#d8d3cb]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=650&fit=crop"
                alt="Luxury property"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="text-left lg:pl-4">
          <p className="text-[22px] font-light leading-[1.45] text-[#252b32] md:text-[26px]">
            Enjoy from 2 to 12 weeks a year across a curated mix of exceptional
            yachts and residences — yours to return to, time and time again.
          </p>
          <p className="mt-6 text-[15px] leading-[1.85] text-[#252b32]/70">
            Blue Sky Fractions makes co-owning simpler. It removes the practical
            burdens of sole ownership, without tying you to one asset, one
            destination, or one way of travelling. A fractional model designed to
            remove compromise and replace it with confidence.
          </p>
          <a
            href="#"
            className="mt-10 inline-block bg-[#252b32] px-10 py-3.5 text-[11px] font-medium tracking-[0.16em] text-[#fcf7ef] transition-opacity hover:opacity-90"
          >
            EXPLORE THE CLUB
          </a>
        </div>
      </div>
    </section>
  )
}
