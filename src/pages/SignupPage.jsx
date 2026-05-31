import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AuthSplitLayout } from '../components/auth/AuthSplitLayout'

export function SignupPage() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setPending(true)
    try {
      await signup(email, password, name || undefined)
      navigate('/marketplace')
    } catch (err) {
      setError(err.message)
    } finally {
      setPending(false)
    }
  }

  return (
    <AuthSplitLayout
      eyebrow="JOIN THE CLUB"
      title="Create your profile"
      lede="One account for the marketplace: list yacht or property fractions and connect with qualified buyers."
    >
      <p className="text-[11px] tracking-[0.16em] text-[#252b32]/45">REGISTRATION</p>
      <h2 className="mt-2 text-[22px] font-light text-[#252b32]">Open your account</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">NAME</label>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] text-[#252b32] outline-none transition-shadow focus:border-[#252b32]/35 focus:ring-1 focus:ring-[#252b32]/15"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">EMAIL</label>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] text-[#252b32] outline-none transition-shadow focus:border-[#252b32]/35 focus:ring-1 focus:ring-[#252b32]/15"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[10px] tracking-[0.14em] text-[#252b32]/50">
            PASSWORD
          </label>
          <input
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-sm border border-[#252b32]/12 bg-white px-3 py-2.5 text-[14px] text-[#252b32] outline-none transition-shadow focus:border-[#252b32]/35 focus:ring-1 focus:ring-[#252b32]/15"
          />
          <p className="mt-1.5 text-[11px] text-[#252b32]/40">At least 8 characters</p>
        </div>
        {error ? (
          <p className="rounded-sm border border-red-200/80 bg-red-50/90 px-3 py-2 text-[13px] text-red-900/85">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-sm bg-[#252b32] py-3.5 text-[11px] font-medium tracking-[0.16em] text-[#fcf7ef] transition-opacity hover:opacity-95 disabled:opacity-50"
        >
          {pending ? 'CREATING…' : 'SIGN UP'}
        </button>
      </form>

      <p className="mt-8 text-center text-[13px] text-[#252b32]/55">
        Already registered?{' '}
        <Link to="/login" className="font-medium text-[#252b32] underline decoration-[#252b32]/25 underline-offset-4">
          Log in
        </Link>
      </p>
    </AuthSplitLayout>
  )
}
