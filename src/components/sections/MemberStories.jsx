const FEATURED = {
  image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&h=600&fit=crop',
  body:
    "\u2018You can spend hours just admiring the sea.\u2019 For Lars and Anya, members since 2019, Christmas and New Year brought a truly memorable family escape to Indonesia\u2014splitting their stay between a private yacht and a coastal residence.",
}

export function MemberStories() {
  return (
    <section className="bg-[#fcf7ef] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid items-center gap-12 border border-[#252b32]/10 bg-[#fcf7ef] p-8 md:grid-cols-2 md:gap-14 md:p-12 lg:p-16">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-0.02em] text-[#252b32] md:text-[40px]">
                Member
                <br />
                Stories
              </h2>
              <span className="select-none text-[48px] leading-none text-[#252b32]/25 md:text-[56px]" aria-hidden>
                &rdquo;
              </span>
            </div>
            <p className="mt-8 text-[15px] leading-[1.85] text-[#252b32]/75">{FEATURED.body}</p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d3cb] md:aspect-auto md:min-h-[320px]">
            <img
              src={FEATURED.image}
              alt="Evening deck overlooking the sea"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
