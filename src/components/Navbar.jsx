import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const homeLink = (anchor) => isHome ? anchor : '/' + anchor

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Link to="/" className="navbar-logo">Bunker</Link>

      <ul className="navbar-links">
        <li><a href={homeLink('#hero')}>Quiénes Somos</a></li>
        <li><Link to="/tiktok" className="navbar-tiktok">Abre tu Tienda</Link></li>
        <li><a href={homeLink('#estudio')}>Estudios</a></li>
        <li><a href={homeLink('#membership')}>Membresías</a></li>
      </ul>

      <a href={homeLink('#contacto')} className="navbar-cta">
        Contacto
      </a>
    </motion.nav>
  )
}

export default Navbar