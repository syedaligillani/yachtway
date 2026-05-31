import { Link } from 'react-router-dom'

export function HeaderBrand() {
  return (
    <Link
      to="/"
      aria-label="Blue Sky Fractions home"
      className="inline-flex items-center text-[15px] font-semibold tracking-[0.3em] text-[#252b32]"
    >
      BLUE SKY FRACTIONS
    </Link>
  )
}
