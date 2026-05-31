const POLICY_LINKS = ['CONTACT', 'CLUB TEAM', 'PRIVACY POLICY', 'TERMS & CONDITIONS', 'COOKIE POLICY', 'SITE MAP']
const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.045 1.545.112v3.26a9 9 0 0 0-.82-.028c-1.165 0-1.615.44-1.615 1.587v2.627h2.354l-.405 3.667h-1.95v8.164A11.52 11.52 0 0 0 12.001 24c-.328 0-.652-.014-.973-.04z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#293826] text-[#f3f0e8]">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-14 md:px-10 md:py-16">
        <div className="grid items-center gap-10 border-b border-white/15 pb-9 text-center md:grid-cols-3 md:text-left">
          <div className="space-y-2">
            <p className="text-[11px] tracking-[0.15em] text-white/75">CALL</p>
            <p className="text-[14px] leading-7 text-white/85">+1 (800) 922-4819</p>
            <p className="text-[14px] leading-7 text-white/85">+44 (0)20 7946 0932</p>
            <p className="text-[13px] leading-7 text-white/70">24/7 Concierge Support</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] tracking-[0.12em] text-white/70">~ ~ ~</p>
            <p className="mt-2 text-[13px] tracking-[0.28em] text-white/90">BLUE SKY FRACTIONS</p>
            <p className="mt-3 text-[13px] leading-6 text-white/75">
              Luxury charters, private crews, and seamless coastal itineraries.
            </p>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-[11px] tracking-[0.15em] text-white/75">EMAIL</p>
            <p className="text-[14px] leading-7 text-white/85">concierge@yachtwayclub.com</p>
            <p className="text-[14px] leading-7 text-white/85">owners@yachtwayclub.com</p>
            <p className="text-[13px] leading-7 text-white/70">Monaco | Cannes | Barcelona</p>
          </div>
        </div>

        <div className="border-b border-white/15 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] tracking-[0.12em] text-white/80">
            {POLICY_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-white/15 py-5">
          <div className="flex items-center justify-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white/80 transition-colors hover:text-white"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] tracking-[0.08em] text-white/70">
            Copyright 2026 Blue Sky Fractions Limited. All rights reserved.
          </p>
        </div>

        <div className="pt-7">
          <p className="mx-auto max-w-[980px] text-center text-[11px] leading-6 text-white/58">
            Investment in marine lifestyle memberships is intended for qualified participants.
            Values may fluctuate and future performance is not guaranteed. Review all documents,
            risk notices, and local eligibility requirements before making any commitment.
          </p>
        </div>
      </div>
    </footer>
  )
}
