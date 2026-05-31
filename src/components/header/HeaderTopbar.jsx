export function HeaderTopbar({ leftItems, rightContent, children }) {
  return (
    <div className="border-b border-[#252b32]/10">
      <div className="grid h-[50px] w-full grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-8">
          {leftItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[12px] font-normal tracking-[0.12em] text-[#252b32] transition-opacity hover:opacity-70"
            >
              {index === 0 ? '\u25ce ' : ''}
              {item.label}
            </a>
          ))}
        </div>

        <div className="justify-self-center">{children}</div>

        <div className="justify-self-end">
          <div className="hidden md:flex">{rightContent}</div>
        </div>
      </div>
    </div>
  )
}
