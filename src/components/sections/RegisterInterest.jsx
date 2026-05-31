import { useState } from 'react'

const INTEREST_OPTIONS = [
  { value: 'buy-yacht', label: 'Buy yacht' },
  { value: 'sell-yacht', label: 'Sell yacht' },
  { value: 'buy-property', label: 'Buy property' },
  { value: 'sell-property', label: 'Sell property' },
  { value: 'other', label: 'Other' },
]

export function RegisterInterest() {
  const [interest, setInterest] = useState('')
  const isOther = interest === 'other'

  return (
    <section id="register" className="bg-[#293826] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[520px] text-center">
        <h2 className="text-[28px] font-light leading-[1.25] text-[#f3f0e8] md:text-[32px]">
          Register your interest
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-12 grid gap-6 text-left"
        >
          <div className="sm:grid sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="mb-1 block text-[10px] tracking-[0.12em] text-white/60">
                FIRST NAME *
              </label>
              <input
                type="text"
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-[14px] text-white/90 outline-none focus:border-white/60"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] tracking-[0.12em] text-white/60">
                LAST NAME *
              </label>
              <input
                type="text"
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-[14px] text-white/90 outline-none focus:border-white/60"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[10px] tracking-[0.12em] text-white/60">
              EMAIL *
            </label>
            <input
              type="email"
              required
              className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-[14px] text-white/90 outline-none focus:border-white/60"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px] tracking-[0.12em] text-white/60">
              HOW CAN WE HELP? *
            </label>
            <select
              required
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full cursor-pointer border-b border-white/30 bg-transparent py-2 text-[14px] text-white/90 outline-none focus:border-white/60 [&>option]:bg-[#293826] [&>option]:text-white"
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-[10px] tracking-[0.12em] text-white/60">
              MESSAGE{isOther ? ' *' : ''}
            </label>
            <textarea
              name="message"
              rows={4}
              required={isOther}
              placeholder={
                isOther
                  ? 'Please tell us how we can help…'
                  : 'Optional — add any details that will help us assist you'
              }
              className="w-full resize-y border-b border-white/30 bg-transparent px-0 py-2 text-[14px] text-white/90 outline-none placeholder:text-white/35 focus:border-white/60"
            />
            {isOther ? (
              <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                A message is required when you select Other so we can support your
                enquiry.
              </p>
            ) : null}
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="text-[11px] tracking-[0.14em] text-white/85 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
            >
              Submit inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
