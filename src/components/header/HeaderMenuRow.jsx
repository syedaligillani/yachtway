import { HeaderNav } from './HeaderNav'

export function HeaderMenuRow({ items }) {
  return (
    <div className="border-b border-[#252b32]/10">
      <div className="flex h-[36px] w-full items-center justify-center px-6 md:px-8 lg:px-12">
        <HeaderNav items={items} />
      </div>
    </div>
  )
}
