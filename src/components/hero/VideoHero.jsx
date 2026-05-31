const HERO_VIDEO_SOURCES = [
  { src: '/videos/14037398-uhd_3840_2160_30fps.mp4', type: 'video/mp4' },
]

const HERO_POSTER = '/images/hero-poster.jpg'

export function VideoHero() {
  return (
    <section className="relative min-h-[calc(100svh-86px)] w-full overflow-hidden bg-[#d8d3cb]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
        aria-label="Scenic hero video banner"
      >
        {HERO_VIDEO_SOURCES.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-86px)] w-full max-w-[1320px] items-end px-6 pb-12 md:px-10">
        <p className="text-sm font-light tracking-[0.15em] text-white/90">
          BLUE SKY FRACTIONS
        </p>
      </div>
    </section>
  )
}
