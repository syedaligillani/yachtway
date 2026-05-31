import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Layout } from './pages/Layout'
import { HomePage } from './pages/HomePage'
import { MarketplacePage } from './pages/MarketplacePage'
import { ListingDetailPage } from './pages/ListingDetailPage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { SellPage } from './pages/SellPage'
import { AboutPage, ContactPage, PropertyFractionPage, YachtFractionPage } from './pages/StaticPages'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="marketplace" element={<MarketplacePage />} />
            <Route path="marketplace/:id" element={<ListingDetailPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="sell" element={<SellPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="yacht-fraction" element={<YachtFractionPage />} />
            <Route path="property-fraction" element={<PropertyFractionPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
