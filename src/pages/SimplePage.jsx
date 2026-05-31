export function SimplePage({ eyebrow, title, children }) {
  return (
    <div className="bg-[#fcf7ef] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        {eyebrow ? (
          <p className="text-[11px] tracking-[0.18em] text-[#252b32]/60">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 text-[32px] font-light text-[#252b32] md:text-[38px]">{title}</h1>
        <div className="mt-8 text-left text-[15px] leading-[1.85] text-[#252b32]/75">{children}</div>
      </div>
    </div>
  )
}
