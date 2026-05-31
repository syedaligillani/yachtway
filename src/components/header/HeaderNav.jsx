import { Link, NavLink } from 'react-router-dom'

export function HeaderNav({ items }) {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-9 lg:gap-11">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-[11px] font-normal tracking-[0.14em] text-[#252b32] transition-opacity hover:opacity-70 sm:text-[12px] ${
                  isActive ? 'opacity-100 underline decoration-[#252b32]/30 underline-offset-4' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
