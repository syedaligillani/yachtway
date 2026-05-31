export function Newsletter() {
  return (
    <section className="bg-[#fcf7ef] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[620px] text-center">
        <p className="text-[11px] tracking-[0.18em] text-[#252b32]/60">STAY CONNECTED</p>
        <h2 className="mt-3 text-[28px] font-light leading-[1.3] text-[#252b32] md:text-[32px]">
          Be First To Discover
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[14px] leading-[1.8] text-[#252b32]/65">
          Receive updates on our fleet, travel inspiration, and stories from our
          community. Sign up and stay connected.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid max-w-[460px] gap-5 text-left sm:grid-cols-2"
        >
          <div>
            <label className="mb-1 block text-[10px] tracking-[0.12em] text-[#252b32]/55">
              FIRST NAME *
            </label>
            <input
              type="text"
              required
              className="w-full border-b border-[#252b32]/25 bg-transparent px-0 py-2 text-[14px] text-[#252b32] outline-none focus:border-[#252b32]/50"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] tracking-[0.12em] text-[#252b32]/55">
              LAST NAME *
            </label>
            <input
              type="text"
              required
              className="w-full border-b border-[#252b32]/25 bg-transparent px-0 py-2 text-[14px] text-[#252b32] outline-none focus:border-[#252b32]/50"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-[10px] tracking-[0.12em] text-[#252b32]/55">
              EMAIL *
            </label>
            <input
              type="email"
              required
              className="w-full border-b border-[#252b32]/25 bg-transparent px-0 py-2 text-[14px] text-[#252b32] outline-none focus:border-[#252b32]/50"
            />
          </div>
          <div className="mt-2 sm:col-span-2">
            <button
              type="submit"
              className="w-full border border-[#252b32]/30 px-8 py-3 text-[11px] tracking-[0.14em] text-[#252b32] transition-colors hover:bg-[#252b32] hover:text-[#fcf7ef]"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
