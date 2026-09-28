import { motion } from 'framer-motion'
import '../styles/Estudio.css'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

function Estudio() {
  return (
    <section className="estudio" id="estudio">

      <div className="estudio-bg">
        <div className="estudio-bg-glow" />
      </div>

      <div className="estudio-inner">

        {/* Header */}
        <motion.div
          className="estudio-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="estudio-tag">EL ESPACIO</span>
          <h2 className="estudio-titulo">
            NO FILMAMOS.<br />
            <em>INGENIAMOS VENTAS.</em>
          </h2>
          <p className="estudio-subtitulo">
            Bunker es un entorno controlado para marcas que toman en serio
            su performance. Cada espacio, cada cámara, cada luz está
            construida con un solo objetivo: resultados en TikTok Live.
          </p>
        </motion.div>

        {/* Grid de fotos */}
        <div className="estudio-grid">

          {/* Imagen principal grande — izquierda */}
          <motion.div
            className="estudio-img-main"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <img src="/studio-real.png" alt="Estudio Bunker real" />
            <div className="estudio-img-overlay" />
            <div className="estudio-img-label">
              <span className="estudio-img-dot" />
              <p>ESTUDIO PRINCIPAL</p>
            </div>
          </motion.div>

          {/* Columna derecha — 2 imágenes */}
          <motion.div
            className="estudio-col-right"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >

            <motion.div className="estudio-img-sm" variants={staggerItem}>
              <img src="/studio-dark.png" alt="Estudio cinematográfico" />
              <div className="estudio-img-overlay" />
              <div className="estudio-img-label">
                <span className="estudio-img-dot" />
                <p>SETUP LIVE</p>
              </div>
            </motion.div>

            <motion.div className="estudio-img-sm" variants={staggerItem}>
              <img src="/studio-camera.png" alt="Cámara profesional" />
              <div className="estudio-img-overlay" />
              <div className="estudio-img-label">
                <span className="estudio-img-dot" />
                <p>PRODUCCIÓN</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Features en fila */}
        <motion.div
          className="estudio-features"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {[
            {
              num: '01',
              titulo: 'Setup Profesional',
              texto: 'Iluminación broadcast, cámaras de cine y audio de estudio. Llegás y transmitís — sin configurar nada.'
            },
            {
              num: '02',
              titulo: 'Ubicación USA',
              texto: 'Estudio físico en Estados Unidos, diseñado para el mercado hispano y las exigencias de TikTok Shop.'
            },
            {
              num: '03',
              titulo: 'Equipo Dedicado',
              texto: 'Operadores, técnicos y directores de live disponibles para que vos te enfoques en vender.'
            },
            {
              num: '04',
              titulo: 'Resultados Medibles',
              texto: 'Cada transmisión se analiza. Métricas reales, decisiones reales, crecimiento constante.'
            },
          ].map((item, i) => (
            <motion.div key={i} className="estudio-feature" variants={staggerItem}>
              <p className="estudio-feature-num">{item.num}</p>
              <div className="estudio-feature-content">
                <p className="estudio-feature-titulo">{item.titulo}</p>
                <p className="estudio-feature-texto">{item.texto}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="estudio-cta-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <a href="#membership" className="estudio-cta">
            VER PLANES Y PRECIOS &nbsp;→
          </a>
          <a href="#contacto" className="estudio-cta-sec">
            AGENDAR UNA VISITA &nbsp;→
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Estudio