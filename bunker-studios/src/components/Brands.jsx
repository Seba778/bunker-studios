import { motion } from 'framer-motion'
import '../styles/Brands.css'
import { fadeUp, viewportOptions } from '../utils/animations'

function Brands() {
  return (
    <section className="brands">
      <motion.div
        className="brands-content"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <p className="brands-label">PLATAFORMA OFICIAL DE VENTAS</p>

        <div className="brands-tiktok">
          <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
            <path d="M38 10.6a9.8 9.8 0 01-7.7-8.6H23V31a5.8 5.8 0 11-4.1-5.5V18a13.1 13.1 0 1011.2 12.9V18.4a17.2 17.2 0 0010 3.2v-7.3a9.9 9.9 0 01-2.1-.7z" fill="#C9A84C" opacity="0.9"/>
          </svg>
          <p className="brands-tiktok-nombre">TikTok Shop</p>
        </div>

        <p className="brands-texto">
          Bunker es un estudio especializado en live selling para <strong>TikTok Shop</strong> —
          la plataforma de comercio en vivo de mayor crecimiento en el mercado hispano
          de Estados Unidos. Toda nuestra infraestructura, estrategia y equipo están
          diseñados específicamente para maximizar tus ventas en este canal.
        </p>

        <div className="brands-stats">
          <div className="brands-stat">
            <p className="brands-stat-num">+135M</p>
            <p className="brands-stat-label">usuarios hispanos en TikTok USA</p>
          </div>
          <div className="brands-stat-sep" />
          <div className="brands-stat">
            <p className="brands-stat-num">$20B</p>
            <p className="brands-stat-label">proyección ventas TikTok Shop 2025</p>
          </div>
          <div className="brands-stat-sep" />
          <div className="brands-stat">
            <p className="brands-stat-num">3×</p>
            <p className="brands-stat-label">más conversiones en live vs feed</p>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Brands