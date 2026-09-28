import { motion } from 'framer-motion'
import '../styles/FaseExclusiva.css'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

function FaseExclusiva() {
  return (
    <section className="fase" id="fase">

      <div className="fase-bg">
        <div className="fase-bg-glow-1" />
        <div className="fase-bg-glow-2" />
        <div className="fase-bg-noise" />
      </div>

      <div className="fase-frame">
        <span className="ff ff-tl" /><span className="ff ff-tr" />
        <span className="ff ff-bl" /><span className="ff ff-br" />
      </div>

      <div className="fase-inner">

        {/* Header de sección */}
        <motion.div
          className="fase-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={viewportOptions}
        >
          <span className="fase-section-tag">¿QUÉ ES BUNKER?</span>
        </motion.div>

        {/* Título grande */}
        <motion.div
          className="fase-titulo-wrap"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <p className="fase-label">FASE</p>
          <h2 className="fase-titulo">EXCLUSIVA</h2>
        </motion.div>

        {/* Grid principal */}
        <div className="fase-main">

          <div className="fase-left">

            <motion.div
              className="fase-intro-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={viewportOptions}
            >
              <p className="fase-intro-big">
                No es solo un estudio. Es una infraestructura
                completa diseñada para que tu marca venda
                más en cada transmisión en vivo de TikTok.
              </p>
            </motion.div>

            <motion.div
              className="fase-textos"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div className="fase-col" variants={staggerItem}>
                <div className="fase-col-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M2 17L12 22L22 17" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M2 12L12 17L22 12" stroke="#C9A84C" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="fase-col-title">Estudio Profesional</h3>
                <p>
                  Espacios equipados con iluminación de cine, fondos
                  intercambiables y setup multicámara listos para
                  transmitir en TikTok Live desde el primer día.
                  Sin improvisaciones. Sin fondos de habitación.
                  Solo resultados profesionales que generan confianza
                  en tu audiencia y aumentan tus conversiones.
                </p>
              </motion.div>

              <motion.div className="fase-col" variants={staggerItem}>
                <div className="fase-col-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M12 6V12L16 14" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="fase-col-title">Estrategia de Ventas</h3>
                <p>
                  No basta con aparecer en cámara. Te enseñamos
                  cómo estructurar tu live, qué decir, cuándo hacer
                  el llamado a la acción y cómo mantener a tu
                  audiencia enganchada de principio a fin.
                  Cada sesión es una oportunidad de venta bien
                  ejecutada, no solo contenido.
                </p>
              </motion.div>

              <motion.div className="fase-col" variants={staggerItem}>
                <div className="fase-col-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="#C9A84C" strokeWidth="1.5"/>
                    <circle cx="12" cy="11" r="4" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M23 21V19C23 17.1 21.7 15.5 20 15.1" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M1 21V19C1 17.1 2.3 15.5 4 15.1" stroke="#C9A84C" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="fase-col-title">Equipo Dedicado</h3>
                <p>
                  Contás con soporte técnico en tiempo real durante
                  tu transmisión, operadores de cámara y hosts
                  profesionales disponibles. Tu único trabajo es
                  presentar tu producto con confianza. Del resto
                  se encarga Bunker.
                </p>
              </motion.div>

              <motion.div className="fase-col" variants={staggerItem}>
                <div className="fase-col-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="#C9A84C" strokeWidth="1.5"/>
                    <polyline points="16 7 22 7 22 13" stroke="#C9A84C" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="fase-col-title">Resultados Medibles</h3>
                <p>
                  Con el plan Diamond recibís reportes de performance
                  detallados: métricas de engagement, picos de
                  audiencia, conversiones por transmisión y
                  recomendaciones estratégicas para mejorar
                  semana a semana. Datos reales para decisiones
                  reales.
                </p>
              </motion.div>
            </motion.div>

          </div>

          {/* Derecha — visual */}
          <motion.div
            className="fase-right"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="fase-visual-card">
              <div className="fase-visual-glow" />
              <div className="fase-visual-inner">

                <div className="fase-visual-tag">
                  <span className="fase-live-dot" />
                  <span>LIVE EN TIKTOK</span>
                </div>

                <p className="fase-visual-title">
                  Bunker<br />Live Selling<br />Studios
                </p>

                <div className="fase-visual-stats">
                  <div className="fvs-item">
                    <p className="fvs-num">3×</p>
                    <p className="fvs-label">más conversiones</p>
                  </div>
                  <div className="fvs-sep" />
                  <div className="fvs-item">
                    <p className="fvs-num">USA</p>
                    <p className="fvs-label">mercado en crecimiento</p>
                  </div>
                </div>

                <div className="fase-visual-bar-wrap">
                  <div className="fase-visual-bar">
                    <div className="fase-visual-bar-fill" />
                  </div>
                  <p className="fase-visual-bar-label">Capacidad al 87%</p>
                </div>

                <div className="fase-visual-footer">
                  <p>ACCESO LIMITADO</p>
                  <p className="fase-visual-cta">→ Solicitar lugar</p>
                </div>

              </div>
            </div>

            {/* Badge lateral */}
            <div className="fase-badge-lateral">
              <p>OPERAMOS EN</p>
              <p className="fase-badge-pais">🇺🇸 USA</p>
              <p>EN ESPAÑOL</p>
            </div>

          </motion.div>

        </div>

        {/* Iconos en fila */}
        <motion.div
          className="fase-iconos"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {[
            {
              texto: 'Posicionarte antes que tu competencia en TikTok Shop',
              svg: <svg viewBox="0 0 40 40" fill="none"><path d="M8 14L14 8L20 12L26 8L32 14L28 20H12L8 14Z" stroke="#C9A84C" strokeWidth="1.5" fill="none"/><path d="M12 20V32H28V20" stroke="#C9A84C" strokeWidth="1.5" fill="none"/><path d="M16 32V26H24V32" stroke="#C9A84C" strokeWidth="1.5" fill="none"/></svg>
            },
            {
              texto: 'Tarifas de lanzamiento exclusivas por tiempo limitado',
              svg: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="1.5"/><circle cx="15" cy="17" r="2" fill="#C9A84C"/><circle cx="25" cy="23" r="2" fill="#C9A84C"/><line x1="13" y1="27" x2="27" y2="13" stroke="#C9A84C" strokeWidth="1.5"/></svg>
            },
            {
              texto: 'Acceso directo a nuestro equipo de producción y estrategia',
              svg: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="14" r="5" stroke="#C9A84C" strokeWidth="1.5"/><circle cx="10" cy="16" r="4" stroke="#C9A84C" strokeWidth="1.5"/><circle cx="30" cy="16" r="4" stroke="#C9A84C" strokeWidth="1.5"/><path d="M6 30C6 25 12 22 20 22C28 22 34 25 34 30" stroke="#C9A84C" strokeWidth="1.5" fill="none"/><path d="M2 32C2 28 6 26 10 26" stroke="#C9A84C" strokeWidth="1.5" fill="none"/><path d="M38 32C38 28 34 26 30 26" stroke="#C9A84C" strokeWidth="1.5" fill="none"/></svg>
            },
            {
              texto: 'Prioridad en agenda y horarios prime de TikTok',
              svg: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="1.5"/><circle cx="20" cy="20" r="1.5" fill="#C9A84C"/><line x1="20" y1="10" x2="20" y2="20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><line x1="20" y1="20" x2="27" y2="24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/></svg>
            }
          ].map((item, i) => (
            <motion.div key={i} className="fase-icono-item" variants={staggerItem}>
              <div className="fase-icono">{item.svg}</div>
              <p>{item.texto}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default FaseExclusiva