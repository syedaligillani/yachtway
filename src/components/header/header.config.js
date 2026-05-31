export const TOPBAR_LEFT_ITEMS = [{ id: 'lang', label: 'EN', href: '#' }]

export const TOPBAR_RIGHT_ITEMS = [
  {
    id: 'register-interest',
    label: 'REGISTER INTEREST',
    to: { pathname: '/', hash: 'register' },
    isOutlined: true,
  },
]

export const NAV_ITEMS = [
  { id: 'home', label: 'HOME', to: '/' },
  { id: 'marketplace', label: 'MARKETPLACE', to: '/marketplace' },
  { id: 'about', label: 'ABOUT US', to: '/about' },
  { id: 'yacht-fraction', label: 'YACHT FRACTION', to: '/yacht-fraction' },
  { id: 'property-fraction', label: 'PROPERTY FRACTION', to: '/property-fraction' },
  { id: 'contact', label: 'CONTACT US', to: '/contact' },
]
