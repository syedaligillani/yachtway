import { Link } from 'react-router-dom'

export function HeaderActions({ items }) {
  return (
    <div className="flex items-center gap-6 md:gap-8">
      {items.map((item) => {
        const className = `text-[11px] font-normal tracking-[0.11em] text-[#252b32] transition-colors hover:opacity-70 md:text-[12px] ${
          item.isOutlined ? 'border border-[#252b32] px-7 py-2 md:px-9 md:py-2.5' : 'px-0 py-0'
        }`
        if (item.to) {
          return (
            <Link key={item.id} to={item.to} className={className}>
              {item.label}
            </Link>
          )
        }
        return (
          <a key={item.id} href={item.href} className={className}>
            {item.label}
          </a>
        )
      })}
    </div>
  )
}
