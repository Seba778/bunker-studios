import { motion } from 'framer-motion'
import '../styles/Contacto.css'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

const WHATSAPP_NUMBER = '14695629878'
const WHATSAPP_MESSAGE = 'Hola, me interesa reservar horas en Bunker Live Selling Studios. Me puedes dar mas informacion?'
const EMAIL = 'hello@bunkervisuals.com'

function Contacto() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  const emailUrl = `mailto:${EMAIL}?subject=Consulta%20-%20Bunker%20Live%20Selling%20Studios`
  return (
    <section className="contacto" id="contacto">

      <div className="contacto-bg">
        <div className="contacto-bg-glow-1" />
        <div className="contacto-bg-glow-2" />
        <div className="contacto-bg-noise" />
      </div>

      <div className="contacto-frame">
        <span className="ctf ctf-tl" /><span className="ctf ctf-tr" />
        <span className="ctf ctf-bl" /><span className="ctf ctf-br" />
      </div>

      <div className="contacto-inner">

        {/* Layout principal: izquierda texto + derecha carta */}
        <div className="contacto-top">

          {/* Izquierda */}
          <motion.div
            className="contacto-header"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <span className="contacto-tag">ACCESO GANADO</span>
            <h2 className="contacto-titulo">
              RESERVA<br />
              TU SESION
            </h2>
            <p className="contacto-subtitulo">
              DISPONIBILIDAD LIMITADA CADA SEMANA.
            </p>
            <p className="contacto-desc">
              Listo para llevar tus ventas en TikTok Live al siguiente nivel?
              Contactanos directamente por WhatsApp o email y un miembro
              de nuestro equipo te responde en menos de 24 horas.
              Te asesoramos sin costo para que elijas el plan que mejor
              se adapta a tu marca.
            </p>
          </motion.div>

          {/* Derecha — carta decorativa */}
          <motion.div
            className="contacto-carta-wrap"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div
              className="contacto-carta-inner"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="contacto-carta-glow" />
              <img
                src="/carta-bunker.png"
                alt="Bunker — Access. Control. Value."
                className="contacto-carta-img"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Cards de contacto */}
        <motion.div
          className="contacto-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >

          {/* WhatsApp */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-card contacto-card-wa"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="contacto-card-bg-wa" />

            <div className="contacto-card-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="rgba(37,211,102,0.08)" stroke="rgba(37,211,102,0.3)" strokeWidth="1"/>
                <path d="M24 8C15.16 8 8 15.16 8 24C8 26.84 8.76 29.5 10.08 31.8L8 40L16.44 37.96C18.68 39.2 21.26 39.92 24 39.92C32.84 39.92 40 32.76 40 23.92C40 15.16 32.84 8 24 8Z" fill="rgba(37,211,102,0.15)" stroke="#25D366" strokeWidth="1.5"/>
                <path d="M31.5 27.5C31.16 27.34 29.44 26.5 29.14 26.38C28.84 26.28 28.62 26.22 28.4 26.56C28.18 26.9 27.5 27.66 27.3 27.88C27.1 28.1 26.9 28.12 26.56 27.96C24.62 27 23.32 26.26 22.02 24.06C21.66 23.44 22.38 23.48 23.04 22.16C23.16 21.94 23.1 21.74 23.02 21.58C22.94 21.42 22.26 19.7 21.98 19.02C21.72 18.36 21.44 18.44 21.24 18.44C21.04 18.44 20.82 18.42 20.6 18.42C20.38 18.42 20.02 18.5 19.72 18.84C19.42 19.18 18.56 19.98 18.56 21.7C18.56 23.42 19.74 25.08 19.9 25.3C20.08 25.52 22.24 28.86 25.56 30.38C27.68 31.32 28.5 31.4 29.54 31.24C30.18 31.14 31.5 30.42 31.78 29.62C32.06 28.82 32.06 28.14 31.98 28C31.9 27.84 31.68 27.76 31.5 27.5Z" fill="#25D366"/>
              </svg>
            </div>

            <div className="contacto-card-content">
              <p className="contacto-card-plataforma">WhatsApp</p>
              <p className="contacto-card-accion">Escribenos ahora</p>
              <p className="contacto-card-detalle">
                Respuesta en menos de 1 hora en horario de atencion.
                Te asesoramos sobre el plan ideal para tu marca sin costo.
              </p>
            </div>

            <div className="contacto-card-footer">
              <span className="contacto-card-cta">ABRIR WHATSAPP &nbsp;&rarr;</span>
              <span className="contacto-card-badge contacto-badge-wa">&#9679; MAS RAPIDO</span>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href={emailUrl}
            className="contacto-card contacto-card-email"
            variants={staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="contacto-card-bg-email" />

            <div className="contacto-card-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
                <rect x="10" y="15" width="28" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                <path d="M10 18L24 26L38 18" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="contacto-card-content">
              <p className="contacto-card-plataforma">Email</p>
              <p className="contacto-card-accion">Envianos un correo</p>
              <p className="contacto-card-detalle">
                Para consultas detalladas, propuestas formales
                o informacion especifica sobre planes y disponibilidad.
              </p>
            </div>

            <div className="contacto-card-footer">
              <span className="contacto-card-cta">ENVIAR EMAIL &nbsp;&rarr;</span>
              <span className="contacto-card-badge contacto-badge-email">{EMAIL}</span>
            </div>
          </motion.a>

        </motion.div>

        {/* Info items */}
        <motion.div
          className="contacto-info"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {[
            { icon: '🇺🇸', titulo: 'Operamos en USA', texto: 'Estudio fisico en Estados Unidos, atencion en espanol para el mercado hispano.' },
            { icon: '⚡', titulo: 'Respuesta rapida', texto: 'Nuestro equipo responde consultas en menos de 24 horas habiles.' },
            { icon: '🎯', titulo: 'Asesoria sin costo', texto: 'Te ayudamos a elegir el plan correcto para tu marca sin compromiso.' },
            { icon: '🔒', titulo: 'Acceso limitado', texto: 'Los espacios son limitados. Una vez llena la capacidad, cerramos el acceso.' },
          ].map((item, i) => (
            <motion.div key={i} className="contacto-info-item" variants={staggerItem}>
              <span className="contacto-info-icon">{item.icon}</span>
              <div>
                <p className="contacto-info-titulo">{item.titulo}</p>
                <p className="contacto-info-texto">{item.texto}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Contacto