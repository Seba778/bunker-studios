import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'
import '../styles/TikTokPage.css'

const KIRK_WHATSAPP = '14695629878'
const KIRK_MSG = 'Hola Kirk, me interesa abrir mi tienda en TikTok Shop'

function TikTokPage() {
  const waUrl = 'https://wa.me/' + KIRK_WHATSAPP + '?text=' + encodeURIComponent(KIRK_MSG)

  return (
    <div className="ttkp">

      <section className="ttkp-hero">
        <div className="ttkp-hero-bg" />
        <div className="ttkp-hero-overlay" />
        <div className="ttkp-hero-glow" />
        <motion.div
          className="ttkp-hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="ttkp-tag" variants={fadeUp}>
            KIRKLAND FEWELL - ESPECIALISTA EN TIKTOK SHOP
          </motion.span>
          <motion.h1 className="ttkp-hero-titulo" variants={fadeUp}>
            LA NUEVA MINA DE ORO
            <em>DEL 2025 / 2026</em>
          </motion.h1>
          <motion.p className="ttkp-hero-sub" variants={fadeUp}>
            TikTok Shop: Crecimiento y Estrategia
          </motion.p>
          <motion.div className="ttkp-hero-ctas" variants={fadeUp}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="ttkp-btn-primary">
              ABRIR MI TIENDA AHORA
            </a>
            <a href="#por-que" className="ttkp-btn-secondary">
              VER MAS INFO
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="ttkp-section" id="por-que">
        <div className="ttkp-inner">
          <motion.div
            className="ttkp-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <span className="ttkp-tag">POR QUE TIKTOK SHOP</span>
            <h2 className="ttkp-titulo">
              La nueva mina de oro
              <em>del comercio digital</em>
            </h2>
          </motion.div>

          <motion.div
            className="ttkp-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {[
              { num: '$9,000M', label: 'en ventas USA en 2024', sub: 'Crecimiento del 650% año tras año' },
              { num: '120%', label: 'crecimiento anual', sub: 'Comparado con el año anterior' },
              { num: '$100M', label: 'en un solo dia', sub: 'Black Friday en TikTok Shop' },
              { num: '$349M', label: 'en un mes', sub: 'Diciembre 2023' },
            ].map((item, i) => (
              <motion.div key={i} className="ttkp-stat" variants={staggerItem}>
                <p className="ttkp-stat-num">{item.num}</p>
                <p className="ttkp-stat-label">{item.label}</p>
                <p className="ttkp-stat-sub">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="ttkp-hispana"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="ttkp-hispana-left">
              <span className="ttkp-tag">LA COMUNIDAD HISPANA</span>
              <h3 className="ttkp-hispana-titulo">
                Casi la mitad de los adultos hispanos en EE.UU. usan TikTok.
              </h3>
              <p className="ttkp-hispana-texto">
                Es una comunidad activa, culturalmente conectada y lista para
                consumir productos que le hablen en su idioma y estilo.
                El mercado hispano en EE.UU. es la mayor oportunidad sin explotar
                de TikTok Shop, y Bunker esta posicionado exactamente ahi.
              </p>
            </div>
            <div className="ttkp-hispana-right">
              <div className="ttkp-hispana-card">
                <p className="ttkp-hispana-card-num">50%</p>
                <p className="ttkp-hispana-card-label">de adultos hispanos usan TikTok en EE.UU.</p>
              </div>
              <div className="ttkp-hispana-card">
                <p className="ttkp-hispana-card-num">USA</p>
                <p className="ttkp-hispana-card-label">Mercado hispano, mayor oportunidad del momento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ttkp-section ttkp-section-dark">
        <div className="ttkp-inner">
          <motion.div
            className="ttkp-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <span className="ttkp-tag">EL ECOSISTEMA</span>
            <h2 className="ttkp-titulo">
              TikTok ya no es solo entretenimiento
              <em>Es un canal de ventas masivo</em>
            </h2>
          </motion.div>

          <motion.div
            className="ttkp-eco-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {[
              { titulo: 'Catalogo Optimizado', texto: 'Productos listos para ser aprobados y visibles por millones de usuarios en el feed de TikTok.', icono: '📦' },
              { titulo: 'Lives Estrategicos', texto: 'Ventas en vivo impulsadas por el algoritmo. El canal con mayor tasa de conversion de la plataforma.', icono: '🔴' },
              { titulo: 'Creators y Afiliados', texto: 'Influencers venden por vos. Red de creadores que promocionan tus productos a comision.', icono: '🤝' },
              { titulo: 'Publicidad Integrada', texto: 'Ads conectados directamente a tu tienda. Cada anuncio lleva al usuario a comprar en segundos.', icono: '📣' },
              { titulo: 'Alcance Organico', texto: 'El alcance organico de TikTok es altisimo comparado con cualquier otra red social del mercado.', icono: '📈' },
              { titulo: 'Momento Unico', texto: 'Las marcas que entren ahora tienen ventaja sobre su competencia. La ventana esta abierta hoy.', icono: '⏱️' },
            ].map((item, i) => (
              <motion.div key={i} className="ttkp-eco-card" variants={staggerItem}>
                <span className="ttkp-eco-icono">{item.icono}</span>
                <p className="ttkp-eco-titulo">{item.titulo}</p>
                <p className="ttkp-eco-texto">{item.texto}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="ttkp-section">
        <div className="ttkp-inner">
          <div className="ttkp-kirk">

            <motion.div
              className="ttkp-kirk-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <span className="ttkp-tag">QUIEN LO LIDERA</span>
              <h2 className="ttkp-titulo">Kirkland Fewell</h2>
              <p className="ttkp-kirk-cargo">ESPECIALISTA EN TIKTOK SHOP - BUNKER CREATIVE AGENCY</p>
              <p className="ttkp-kirk-bio">
                Especialista en TikTok Shop con casos de exito en ventas de 5 a 6 cifras.
                Su metodologia combina estrategia de contenido, optimizacion de catalogo
                y ejecucion de lives para llevar marcas hispanas al siguiente nivel
                en el mercado de EE.UU.
              </p>
              <p className="ttkp-kirk-bio">
                TikTok ya no es solo entretenimiento. Es un canal de ventas masivo
                y Kirk tiene el conocimiento y los resultados para probarlo.
              </p>

              <div className="ttkp-kirk-items">
                {[
                  { titulo: 'Duracion clara', texto: '4 semanas de acompanamiento intensivo desde cero hasta resultados.' },
                  { titulo: 'Canal directo', texto: 'Comunicacion via WhatsApp con Kirk y su equipo respondiendo en tiempo real.' },
                  { titulo: 'Acompanamiento en vivo', texto: 'Revision de transmisiones, feedback inmediato y resolucion tecnica y legal.' },
                  { titulo: 'Estrategia de contenido', texto: 'Disenada para escalar ventas y mantener consistencia semana a semana.' },
                  { titulo: 'Mi rol', texto: 'Socio estrategico de tu negocio, no solo un proveedor externo.' },
                ].map((item, i) => (
                  <div key={i} className="ttkp-kirk-item">
                    <div className="ttkp-kirk-dot" />
                    <div>
                      <p className="ttkp-kirk-item-titulo">{item.titulo}</p>
                      <p className="ttkp-kirk-item-texto">{item.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="ttkp-kirk-right"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <div className="ttkp-precio-card">
                <div className="ttkp-precio-card-glow" />
                <div className="ttkp-precio-header">
                  <span className="ttkp-tag">OFERTA Y CIERRE</span>
                  <p className="ttkp-precio-label">Inversion total</p>
                  <p className="ttkp-precio-num">$5,000 <span>USD</span></p>
                  <p className="ttkp-precio-cuotas">
                    $2,500 al inicio + $2,500 a la entrega de la tienda optimizada
                  </p>
                </div>
                <div className="ttkp-precio-divider" />
                <div className="ttkp-precio-incluye">
                  <p className="ttkp-precio-incluye-label">INCLUYE:</p>
                  {[
                    'Optimizacion completa de catalogo',
                    'Estrategia y ejecucion de lives',
                    'Soporte tecnico y legal de productos',
                    'Acompanamiento 4 semanas via WhatsApp',
                    'Atencion directa de Kirk y su equipo',
                    'Apertura y configuracion completa de la tienda',
                  ].map((item, i) => (
                    <div key={i} className="ttkp-precio-item">
                      <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                        <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.2"/>
                        <path d="M6 10L9 13L14 7" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="ttkp-precio-footer">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ttkp-precio-cta"
                  >
                    HABLAR CON KIRK AHORA
                  </a>
                  <p className="ttkp-precio-nota">
                    Sin compromiso. Kirk te asesora gratis antes de cualquier pago.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="ttkp-section ttkp-section-dark">
        <div className="ttkp-inner">
          <motion.div
            className="ttkp-cta-final"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <h2 className="ttkp-cta-titulo">
              TikTok Shop es la nueva mina de oro del comercio digital
            </h2>
            <p className="ttkp-cta-firma">Kirkland Fewell, Especialista en TikTok Shop</p>
            <p className="ttkp-cta-sub">
              La pregunta no es si vas a entrar. Es cuando.
              Las marcas que entren hoy tienen ventaja sobre su competencia manana.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ttkp-btn-primary"
            >
              QUIERO ABRIR MI TIENDA
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="ttkp-footer">
        <p className="ttkp-footer-logo">Bunker</p>
        <p className="ttkp-footer-sub">AGENCY - STUDIO - GROWTH PARTNER</p>
        <a href="/" className="ttkp-footer-back">Volver al inicio</a>
      </footer>

    </div>
  )
}

export default TikTokPage