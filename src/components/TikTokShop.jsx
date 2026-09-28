import { motion } from 'framer-motion'
import '../styles/TikTokShop.css'
import { fadeUp, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

const KIRK_WA = 'https://wa.me/14695629878?text=Hola%20Kirk%2C%20me%20interesa%20abrir%20mi%20tienda%20en%20TikTok%20Shop'

const stats = [
  { num: '$9,000M', label: 'en ventas USA en 2024', sub: 'Crecimiento del 650% año tras año' },
  { num: '120%', label: 'crecimiento anual', sub: 'Comparado con el año anterior' },
  { num: '$100M', label: 'en un solo día', sub: 'Black Friday en TikTok Shop' },
  { num: '50%', label: 'adultos hispanos', sub: 'Usan TikTok en EE.UU.' },
]

const ecosistema = [
  {
    titulo: 'Catalogo Optimizado',
    texto: 'Productos listos para ser aprobados y visibles por millones de usuarios.',
    svg: (<svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="28" rx="2" stroke="#C9A84C" strokeWidth="1.5"/><line x1="9" y1="12" x2="23" y2="12" stroke="#C9A84C" strokeWidth="1.2"/><line x1="9" y1="17" x2="23" y2="17" stroke="#C9A84C" strokeWidth="1.2"/><line x1="9" y1="22" x2="17" y2="22" stroke="#C9A84C" strokeWidth="1.2"/></svg>)
  },
  {
    titulo: 'Lives Estrategicos',
    texto: 'Ventas en vivo impulsadas por el algoritmo con la mayor tasa de conversion.',
    svg: (<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#C9A84C" strokeWidth="1.5"/><circle cx="16" cy="16" r="5" stroke="#C9A84C" strokeWidth="1.2"/><circle cx="16" cy="16" r="2" fill="#C9A84C"/><line x1="16" y1="4" x2="16" y2="8" stroke="#C9A84C" strokeWidth="1.5"/><line x1="16" y1="24" x2="16" y2="28" stroke="#C9A84C" strokeWidth="1.5"/><line x1="4" y1="16" x2="8" y2="16" stroke="#C9A84C" strokeWidth="1.5"/><line x1="24" y1="16" x2="28" y2="16" stroke="#C9A84C" strokeWidth="1.5"/></svg>)
  },
  {
    titulo: 'Creators y Afiliados',
    texto: 'Influencers venden por vos a cambio de comision. Sin costo fijo.',
    svg: (<svg viewBox="0 0 32 32" fill="none"><circle cx="10" cy="12" r="4" stroke="#C9A84C" strokeWidth="1.5"/><circle cx="22" cy="12" r="4" stroke="#C9A84C" strokeWidth="1.5"/><path d="M4 26C4 22 6.5 19 10 19" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><path d="M22 19C25.5 19 28 22 28 26" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 19H19" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="22" r="3" stroke="#C9A84C" strokeWidth="1.2"/></svg>)
  },
  {
    titulo: 'Publicidad Integrada',
    texto: 'Ads conectados directamente a tu tienda para compras en segundos.',
    svg: (<svg viewBox="0 0 32 32" fill="none"><path d="M6 8L26 8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 14H20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 20H16" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="22" r="5" stroke="#C9A84C" strokeWidth="1.5"/><path d="M22 22L23.5 23.5L26.5 20.5" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/></svg>)
  },
  {
    titulo: 'Alcance Organico',
    texto: 'El alcance organico de TikTok supera a cualquier otra red social hoy.',
    svg: (<svg viewBox="0 0 32 32" fill="none"><path d="M4 24L10 16L15 20L21 10L28 8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="28" cy="8" r="2" fill="#C9A84C"/><path d="M24 8H28V12" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/></svg>)
  },
  {
    titulo: 'Comunidad Hispana',
    texto: 'El 50% de adultos hispanos en EE.UU. usan TikTok. Tu audiencia esta ahi.',
    svg: (<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="10" r="5" stroke="#C9A84C" strokeWidth="1.5"/><path d="M6 28C6 22.5 10.5 18 16 18C21.5 18 26 22.5 26 28" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 14C12 14 13 16 16 16C19 16 20 14 20 14" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round"/></svg>)
  },
]

function TikTokShop() {
  return (
    <section className="tts" id="tiktok">
      <div className="tts-bg">
        <div className="tts-bg-glow-1" />
        <div className="tts-bg-glow-2" />
        <div className="tts-bg-noise" />
      </div>

      <div className="tts-inner">

        <motion.div
          className="tts-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="tts-tag">POR QUE AHORA</span>
          <h2 className="tts-titulo">
            LA NUEVA MINA DE ORO<br />
            <em>2025 / 2026</em>
          </h2>
          <p className="tts-subtitulo">
            TikTok Shop es el canal de ventas de mayor crecimiento en la historia del comercio digital.
            El mercado hispano en EE.UU. es su mayor oportunidad sin explotar.
          </p>
        </motion.div>

        <motion.div
          className="tts-stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {stats.map((item, i) => (
            <motion.div key={i} className="tts-stat" variants={staggerItem}>
              <div className="tts-stat-top">
                <p className="tts-stat-num">{item.num}</p>
              </div>
              <p className="tts-stat-label">{item.label}</p>
              <p className="tts-stat-sub">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="tts-sep"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={viewportOptions}
        />

        <motion.div
          className="tts-ecosistema-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="tts-tag">EL ECOSISTEMA</span>
          <h3 className="tts-ecosistema-titulo">
            TikTok ya no es solo entretenimiento.
            <em>Es un canal de ventas masivo.</em>
          </h3>
        </motion.div>

        <motion.div
          className="tts-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {ecosistema.map((item, i) => (
            <motion.div
              key={i}
              className="tts-card"
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="tts-card-icon">{item.svg}</div>
              <p className="tts-card-titulo">{item.titulo}</p>
              <p className="tts-card-texto">{item.texto}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="tts-cta-final"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="tts-cta-final-line" />
          <p className="tts-cta-final-texto">
            La pregunta no es si vas a entrar a TikTok Shop. Es cuando.
          </p>
          <a href={KIRK_WA} target="_blank" rel="noopener noreferrer" className="tts-cta-btn">
            ABRIR MI TIENDA AHORA
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default TikTokShop