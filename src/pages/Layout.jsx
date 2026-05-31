import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/header/SiteHeader'
import Footer from '../components/Footer'

export function Layout() {
  return (
    <div className="min-h-screen bg-[#fcf7ef]">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
