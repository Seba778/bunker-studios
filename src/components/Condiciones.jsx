import { motion } from 'framer-motion'
import '../styles/Condiciones.css'
import { fadeUp, fadeRight, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

function Condiciones() {
  return (
    <section className="cond" id="condiciones">

      <div className="cond-bg">
        <div className="cond-bg-glow" />
        <div className="cond-bg-noise" />
      </div>

      <div className="cond-frame">
        <span className="cf cf-tl" /><span className="cf cf-tr" />
        <span className="cf cf-bl" /><span className="cf cf-br" />
      </div>

      <motion.div
        className="cond-logo-wrap"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={viewportOptions}
      >
        <p className="cond-logo">Bunker</p>
        <p className="cond-logo-sub">AGENCY · STUDIO · GROWTH PARTNER</p>
      </motion.div>

      <div className="cond-inner">

        <motion.div
          className="cond-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="cond-tag">ANTES DE EMPEZAR</span>
          <h2 className="cond-titulo">CONDICIONES<br />GENERALES</h2>
          <p className="cond-subtitulo">
            Todo lo que necesitas saber antes de reservar tu primer live en Bunker.
          </p>
        </motion.div>

        <div className="cond-grid">

          <motion.div
            className="cond-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div className="cond-bloque" variants={staggerItem}>
              <div className="cond-bloque-header">
                <div className="cond-bloque-num">01</div>
                <p className="cond-label">CONTRATO MINIMO</p>
              </div>
              <ul className="cond-lista">
                <li>Compromiso minimo de <strong>3 meses</strong> — el tiempo necesario para ver resultados reales en TikTok Live.</li>
                <li>Despues del periodo inicial, renovacion automatica mes a mes. Cancelacion con 30 dias de aviso.</li>
              </ul>
            </motion.div>

            <motion.div className="cond-bloque" variants={staggerItem}>
              <div className="cond-bloque-header">
                <div className="cond-bloque-num">02</div>
                <p className="cond-label">USO DE HORAS</p>
              </div>
              <ul className="cond-lista">
                <li>Las horas son <strong>mensuales y no acumulables</strong>. Gold y Diamond tienen prioridad en horarios prime.</li>
                <li>Cancelaciones con minimo <strong>24 horas de anticipacion</strong>. Fuera de plazo se contabilizan como horas usadas.</li>
              </ul>
            </motion.div>

            <motion.div className="cond-bloque" variants={staggerItem}>
              <div className="cond-bloque-header">
                <div className="cond-bloque-num">03</div>
                <p className="cond-label">PAGOS</p>
              </div>
              <ul className="cond-lista">
                <li>Pago <strong>mensual y por adelantado</strong>. Aceptamos ACH, Zelle y tarjeta de credito/debito.</li>
                <li>Retrasos mayores a 5 dias habiles pueden resultar en suspension temporal del servicio.</li>
              </ul>
            </motion.div>

          </motion.div>

          <motion.div
            className="cond-right"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="addons-header">
              <span className="cond-tag">SERVICIOS ADICIONALES</span>
              <h3 className="addons-titulo">
                ADD<span className="addon-dot">·</span>ONS
              </h3>
              <p className="addons-desc">
                Potencia tu membresia con servicios adicionales a la carta.
              </p>
            </div>

            <motion.div
              className="addons-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div className="addon-card" variants={staggerItem}>
                <div className="addon-icono">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="14" width="36" height="26" rx="3" stroke="#C9A84C" strokeWidth="1.5"/>
                    <circle cx="24" cy="27" r="8" stroke="#C9A84C" strokeWidth="1.5"/>
                    <circle cx="24" cy="27" r="4" stroke="#C9A84C" strokeWidth="1.2"/>
                    <path d="M16 14L18 9H30L32 14" stroke="#C9A84C" strokeWidth="1.5"/>
                    <circle cx="36" cy="20" r="2" fill="#C9A84C"/>
                  </svg>
                </div>
                <p className="addon-nombre">Operador de camara</p>
                <p className="addon-desc-small">Profesional dedicado para angulos y transiciones en vivo</p>
                <p className="addon-precio">$75 / hr</p>
              </motion.div>

              <motion.div className="addon-card" variants={staggerItem}>
                <div className="addon-icono">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="16" r="8" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M8 42C8 34 15 28 24 28C33 28 40 34 40 42" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <p className="addon-nombre">Host / Vendedor</p>
                <p className="addon-desc-small">Presentador bilingue entrenado en live selling para TikTok Shop</p>
                <p className="addon-precio">$150 – $300 <span>por sesion</span></p>
              </motion.div>

              <motion.div className="addon-card" variants={staggerItem}>
                <div className="addon-icono">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L4 14V26C4 35.9 12.9 45.2 24 48C35.1 45.2 44 35.9 44 26V14L24 4Z" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                    <path d="M16 24L21 29L32 18" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="addon-nombre">Gestion TikTok Shop</p>
                <p className="addon-desc-small">Setup, catalogo y gestion de ordenes de tu tienda</p>
                <p className="addon-precio">Retainer <span>personalizado</span></p>
              </motion.div>

              <motion.div className="addon-card" variants={staggerItem}>
                <div className="addon-icono">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="30" width="8" height="12" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
                    <rect x="20" y="22" width="8" height="20" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
                    <rect x="34" y="12" width="8" height="30" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M10 18L20 14L28 10L42 6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M36 6L42 6L42 12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="addon-nombre">Reporte de performance</p>
                <p className="addon-desc-small">Analisis mensual de metricas, conversiones y recomendaciones</p>
                <p className="addon-precio">$200 <span>mensual</span></p>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Condiciones