import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function HeaderAuth() {
  const { user, loading, logout } = useAuth()

  if (loading) {
    return <span className="hidden text-[11px] text-[#252b32]/40 md:inline">…</span>
  }

  if (user) {
    return (
      <div className="hidden items-center gap-4 md:flex">
        <span className="max-w-[140px] truncate text-[11px] tracking-[0.08em] text-[#252b32]/70">
          {user.name || user.email}
        </span>
        <Link
          to="/sell"
          className="text-[11px] tracking-[0.1em] text-[#252b32] underline decoration-[#252b32]/25 underline-offset-4"
        >
          SELL
        </Link>
        <button
          type="button"
          onClick={() => logout()}
          className="text-[11px] tracking-[0.1em] text-[#252b32]/70 underline decoration-transparent underline-offset-4 hover:text-[#252b32]"
        >
          LOG OUT
        </button>
      </div>
    )
  }

  return (
    <div className="hidden items-center gap-4 md:flex">
      <Link
        to="/login"
        className="text-[11px] tracking-[0.12em] text-[#252b32] transition-opacity hover:opacity-70"
      >
        LOG IN
      </Link>
      <Link
        to="/signup"
        className="text-[11px] tracking-[0.12em] text-[#252b32] underline decoration-[#252b32]/25 underline-offset-4"
      >
        SIGN UP
      </Link>
    </div>
  )
}
