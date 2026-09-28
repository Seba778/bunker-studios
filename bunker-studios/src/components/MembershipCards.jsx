import { motion } from 'framer-motion'
import '../styles/MembershipCards.css'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

function PlanCard({ plan, index }) {
  const planUrl = plan.tipo === 'silver'
    ? 'https://bunkercreativeagency.com?msopen=/member/plans/hvtojbydjb'
    : plan.tipo === 'gold'
    ? 'https://bunkercreativeagency.com?msopen=/member/plans/rxjeeiddai'
    : 'https://bunkercreativeagency.com?msopen=/member/plans/k7h8splcq2'

  return (
    <div className={`plan plan-${plan.tipo}`} id={plan.tipo}>

      <div className="plan-bg">
        <div className={`plan-bg-glow plan-bg-glow-${plan.tipo}`} />
      </div>

      <div className="plan-frame">
        <span className="pf pf-tl" /><span className="pf pf-tr" />
        <span className="pf pf-bl" /><span className="pf pf-br" />
      </div>

      <div className="plan-logo-wrap">
        <p className="plan-logo">Bunker</p>
        <p className="plan-logo-sub">AGENCY · STUDIO · GROWTH PARTNER</p>
      </div>

      <div className="plan-section-header">
        <span className="plan-section-tag">MEMBERSHIP PROGRAM</span>
        <p className="plan-section-sub">
          No es un estudio. Es un sistema para vender en TikTok Live todos los días.
        </p>
      </div>

      <div className="plan-inner">

        <motion.div
          className="plan-info"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="plan-nombre-wrap">
            <p className="plan-nivel">{plan.nivel}</p>
            <h2 className="plan-nombre">{plan.nombre}</h2>
            <div className="plan-nombre-line" />
            <p className="plan-subtitulo">{plan.subtitulo}</p>
            <p className="plan-descripcion">{plan.descripcion}</p>
          </div>

          <motion.div
            className="plan-listas"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="plan-bloque">
              <p className="plan-bloque-label">INCLUYE:</p>
              <ul className="plan-lista">
                {plan.incluye.map((item, i) => (
                  <motion.li key={i} variants={staggerItem}>
                    <span className="plan-check">
                      <svg viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.2"/>
                        <path d="M6 10L9 13L14 7" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className={item.bold ? 'bold' : ''}>{item.texto}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {plan.backdrop && (
              <div className="plan-bloque">
                <p className="plan-bloque-label">+BACKDROP PERSONALIZADO</p>
                <p className="plan-backdrop-title">PERSONALIZADO</p>
                <ul className="plan-lista">
                  {plan.backdrop.map((item, i) => (
                    <motion.li key={i} variants={staggerItem}>
                      <span className="plan-check">
                        <svg viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.2"/>
                          <path d="M6 10L9 13L14 7" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {plan.bonus && (
                  <div className="plan-bonus-wrap">
                    <p className="plan-bloque-label">BONUS</p>
                    <ul className="plan-lista">
                      {plan.bonus.map((item, i) => (
                        <motion.li key={i} variants={staggerItem}>
                          <span className="plan-check">
                            <svg viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.2"/>
                              <path d="M6 10L9 13L14 7" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round"/>
                            </svg>
                          </span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {plan.bonus && !plan.backdrop && (
              <div className="plan-bloque">
                <p className="plan-bloque-label">BONUS</p>
                <ul className="plan-lista">
                  {plan.bonus.map((item, i) => (
                    <motion.li key={i} variants={staggerItem}>
                      <span className="plan-check">
                        <svg viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.2"/>
                          <path d="M6 10L9 13L14 7" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <div className="plan-para-quien">
            <p className="plan-para-label">IDEAL PARA:</p>
            <p className="plan-para-texto">{plan.paraQuien}</p>
          </div>

          <div className="plan-precio-wrap">
            <div className="plan-precio-box">
              <div className="plan-precio-corners">
                <span className="pc pc-tl"/><span className="pc pc-tr"/>
                <span className="pc pc-bl"/><span className="pc pc-br"/>
              </div>
              <p className="plan-precio">
                <span className="precio-num">{plan.precio}</span>
                <span className="precio-per"> {plan.periodo}</span>
              </p>
            </div>
            <p className="plan-contrato">Compromiso mínimo 3 meses · Pago mensual adelantado</p>
          </div>

          <a
            href={planUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`plan-cta plan-cta-${plan.tipo}`}
          >
            SOLICITAR ESTE PLAN
          </a>

        </motion.div>

        <motion.div
          className="plan-card-wrap"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div
            className="plan-card-img-wrap"
            whileHover={{ scale: 1.04, y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className={`plan-card-glow plan-card-glow-${plan.tipo}`} />
            <img
              src={`/${plan.tipo === 'silver' ? 'SILVER' : plan.tipo === 'gold' ? 'GOLD' : 'DIAMOND'}.png`}
              alt={`Bunker ${plan.nombre}`}
              className="plan-card-img-real"
            />
          </motion.div>

          <div className="plan-card-info">
            <div className="pci-item">
              <p className="pci-num">{plan.horas}</p>
              <p className="pci-label">horas / mes</p>
            </div>
            <div className="pci-sep" />
            <div className="pci-item">
              <p className="pci-num">{plan.mics}</p>
              <p className="pci-label">micrófono{plan.mics !== '1' ? 's' : ''}</p>
            </div>
            <div className="pci-sep" />
            <div className="pci-item">
              <p className="pci-num">{plan.soporte}</p>
              <p className="pci-label">soporte</p>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

const planes = [
  {
    nivel: 'BUNKER',
    nombre: 'SILVER ACCESS',
    subtitulo: 'Empieza a vender en TikTok Live como un profesional',
    descripcion: 'El punto de entrada perfecto para marcas y emprendedores que quieren dejar atrás los lives caseros y dar el salto a un entorno profesional. Ideal para validar tu producto y tu presencia en TikTok Live sin una inversión enorme.',
    precio: '$699',
    periodo: 'USD / mes',
    paraQuien: 'Emprendedores que están comenzando en TikTok Live, marcas nuevas que quieren validar su producto en el mercado hispano de USA, o creadores que necesitan mejorar su producción para crecer más rápido.',
    tipo: 'silver',
    horas: '8',
    mics: '1',
    soporte: 'Básico',
    incluye: [
      { texto: '8 horas mensuales de estudio profesional' },
      { texto: 'Setup plug & play — llegás y transmitís' },
      { texto: 'Backdrops estándar de la línea Búnker' },
      { texto: 'Iluminación profesional incluida' },
      { texto: '1 micrófono de calidad broadcast' },
      { texto: 'Soporte técnico al inicio de cada live', bold: true },
    ],
    bonus: null,
    backdrop: null,
  },
  {
    nivel: 'BUNKER',
    nombre: 'GOLD PERFORMANCE',
    subtitulo: 'Escala tus ventas con estructura, soporte y estrategia',
    descripcion: 'Para marcas que ya probaron TikTok Live y quieren llevarlo al siguiente nivel. Con más horas, mayor flexibilidad y soporte durante toda la transmisión, este plan está diseñado para crecer de manera consistente y profesional.',
    precio: '$1.499',
    periodo: 'USD / mes',
    paraQuien: 'Marcas activas que ya generan ventas en TikTok Live y necesitan más horas, mejor producción y asesoría para optimizar su estrategia. También para negocios que quieren escalar a múltiples lives semanales.',
    tipo: 'gold',
    horas: '20',
    mics: '2',
    soporte: 'Full live',
    incluye: [
      { texto: '20 horas mensuales — hasta 5 lives por semana' },
      { texto: 'Prioridad en agenda y horarios prime de TikTok' },
      { texto: 'Setup adaptable según el producto de cada sesión' },
      { texto: 'Backdrops variados que refuerzan tu marca' },
      { texto: 'Iluminación ajustable por tipo de producto' },
      { texto: '2 micrófonos — ideal para lives con invitados', bold: true },
      { texto: 'Soporte técnico completo durante la transmisión' },
      { texto: 'Asistencia básica de producción en cada sesión' },
    ],
    bonus: ['1 sesión mensual de asesoría estratégica en live selling — estructura de guión, hooks de ventas y análisis de métricas.'],
    backdrop: null,
  },
  {
    nivel: 'BUNKER',
    nombre: 'DIAMOND AUTHORITY',
    subtitulo: 'La infraestructura completa para dominar TikTok Live',
    descripcion: 'El plan más completo de Bunker. Para marcas que entienden que TikTok Live es un canal de ventas serio y quieren tratarlo como tal. Producción broadcast completa, backdrop personalizado con tu identidad de marca y acceso prioritario total al estudio.',
    precio: '$2.999',
    periodo: 'USD / mes',
    paraQuien: 'Marcas consolidadas que quieren hacer de TikTok Live su canal de ventas principal. Empresas con líneas de productos diversas, equipos de ventas y la visión de posicionarse como referentes en su categoría en el mercado hispano de USA.',
    tipo: 'diamond',
    horas: '40',
    mics: '2-3',
    soporte: '24/7',
    incluye: [
      { texto: '40 horas mensuales — casi lives diarios' },
      { texto: 'Acceso prioritario total al estudio' },
      { texto: 'Producción completa — camarógrafos, técnicos, dirección' },
      { texto: 'Dirección de live: estructura de guión, hooks y timing de ofertas' },
      { texto: 'Setup multicámara para transmisiones de alto impacto', bold: true },
      { texto: '2-3 micrófonos según formato del live' },
      { texto: 'Soporte técnico full — antes, durante y después' },
    ],
    backdrop: ['Backdrop con colores de tu marca', 'Logo integrado en escena', 'Estética visual premium y exclusiva para tu marca'],
    bonus: ['2 sesiones mensuales de asesoría estratégica: análisis de performance, optimización de guiones y estrategia de crecimiento en TikTok Shop.'],
  },
]

function MembershipCards() {
  return (
    <section className="membership" id="membership">

      <motion.div
        className="membership-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={viewportOptions}
      >
        <span className="membership-tag">ELIGE TU PLAN</span>
        <h2 className="membership-titulo">
          Tres niveles.
          <em>Un solo objetivo: vender más.</em>
        </h2>
        <p className="membership-desc">
          Cada plan incluye acceso a infraestructura profesional de live selling
          en Estados Unidos, operada en español para el mercado hispano.
          Todos los planes requieren un compromiso mínimo de 3 meses.
        </p>
      </motion.div>

      {planes.map((plan, index) => (
        <PlanCard key={plan.nombre} plan={plan} index={index} />
      ))}
    </section>
  )
}

export default MembershipCards