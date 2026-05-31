import { NAV_ITEMS, TOPBAR_LEFT_ITEMS, TOPBAR_RIGHT_ITEMS } from './header.config'
import { HeaderActions } from './HeaderActions'
import { HeaderAuth } from './HeaderAuth'
import { HeaderBrand } from './HeaderBrand'
import { HeaderMenuRow } from './HeaderMenuRow'
import { HeaderTopbar } from './HeaderTopbar'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-[#fcf7ef] text-[#252b32] shadow-[0_5px_10px_rgba(0,0,0,0.05)] transition-[background-color,box-shadow] duration-150 ease-in">
      <HeaderTopbar
        leftItems={TOPBAR_LEFT_ITEMS}
        rightContent={
          <div className="flex items-center gap-5 md:gap-7">
            <HeaderAuth />
            <HeaderActions items={TOPBAR_RIGHT_ITEMS} />
          </div>
        }
      >
        <HeaderBrand />
      </HeaderTopbar>
      <HeaderMenuRow items={NAV_ITEMS} />
    </header>
  )
}
