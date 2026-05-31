import { Link } from 'react-router-dom'

/**
 * Shared split layout for auth pages — dark editorial panel + light form card.
 */
export function AuthSplitLayout({ eyebrow, title, lede, children, footer = null }) {
  return (
    <div className="min-h-[calc(100svh-88px)] bg-[#fcf7ef]">
      <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-[1200px] lg:grid-cols-[42%_58%]">
        <aside className="relative flex flex-col justify-between overflow-hidden bg-[#293826] px-8 py-12 text-[#f3f0e8] md:px-12 md:py-16 lg:min-h-[calc(100svh-88px)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative">
            <p className="text-[10px] tracking-[0.22em] text-[#f3f0e8]/55">{eyebrow}</p>
            <h1 className="mt-4 text-[32px] font-light leading-[1.15] tracking-[-0.02em] md:text-[40px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[320px] text-[14px] leading-[1.75] text-[#f3f0e8]/72">{lede}</p>
            <div className="mt-10 h-px w-16 bg-[#f3f0e8]/25" />
          </div>
          <div className="relative mt-12 text-[11px] tracking-[0.14em] text-[#f3f0e8]/45">
            <Link to="/" className="transition-colors hover:text-[#f3f0e8]/80">
              ← Back to site
            </Link>
          </div>
        </aside>

        <div className="flex items-center justify-center px-6 py-12 md:px-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[400px] rounded-sm border border-[#252b32]/[0.08] bg-[#fffcf5] p-8 shadow-[0_24px_48px_-24px_rgba(37,43,50,0.18)] md:p-10">
            {children}
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}
