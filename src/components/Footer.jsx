import { motion } from 'framer-motion'
import '../styles/Footer.css'
import { fadeUp, viewportOptions } from '../utils/animations'

function Footer() {
  return (
    <footer className="footer" id="footer">

      <motion.div
        className="footer-inner"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >

        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">Bunker</p>
            <p className="footer-tagline">AGENCY · STUDIO · GROWTH PARTNER</p>
          </div>

          <nav className="footer-nav">
            <a href="#fase">Estudio</a>
            <span>·</span>
            <a href="#membership">Membresías</a>
            <span>·</span>
            <a href="#condiciones">Condiciones</a>
            <span>·</span>
            <a href="#politicas">Nosotros</a>
          </nav>

          <div className="footer-contact">
            <p>hello@bunkervisuals.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Bunker Creative Agency. Todos los derechos reservados.
          </p>
          <p className="footer-disclaimer">
            No garantiza resultados específicos en ventas.
          </p>
        </div>

      </motion.div>
    </footer>
  )
}

export default Footer