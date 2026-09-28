import { Routes, Route } from 'react-router-dom'
import './styles/variables.css'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import MembershipCards from './components/MembershipCards'
import TikTokShop from './components/TikTokShop'
import Estudio from './components/Estudio'
import FaseExclusiva from './components/FaseExclusiva'
import Condiciones from './components/Condiciones'
import Politicas from './components/Politicas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import TikTokPage from './pages/TikTokPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Brands />
            <MembershipCards />
            <TikTokShop />
            <Estudio />
            <FaseExclusiva />
            <Condiciones />
            <Politicas />
            <Contacto />
            <Footer />
          </>
        } />
        <Route path="/tiktok" element={<TikTokPage />} />
      </Routes>
    </>
  )
}

export default App