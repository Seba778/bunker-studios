import { motion } from 'framer-motion'
import '../styles/Politicas.css'
import { fadeUp, staggerContainer, staggerItem, viewportOptions } from '../utils/animations'

function Politicas() {
  return (
    <section className="pol" id="politicas">

      <div className="pol-bg">
        <div className="pol-bg-glow" />
        <div className="pol-bg-noise" />
      </div>

      <div className="pol-frame">
        <span className="polf polf-tl" /><span className="polf polf-tr" />
        <span className="polf polf-bl" /><span className="polf polf-br" />
      </div>

      <motion.div
        className="pol-logo-wrap"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={viewportOptions}
      >
        <p className="pol-logo">Bunker</p>
        <p className="pol-logo-sub">AGENCY · STUDIO · GROWTH PARTNER</p>
      </motion.div>

      <div className="pol-inner">

        <motion.div
          className="pol-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="pol-tag">TRANSPARENCIA TOTAL</span>
          <h2 className="pol-titulo-main">LO QUE NECESITAS<br />SABER</h2>
          <p className="pol-intro-main">
            Operamos con total transparencia. Tu informacion y estrategia son tratadas con estricta confidencialidad.
          </p>
        </motion.div>

        <div className="pol-grid">

          <motion.div
            className="pol-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.h3 className="pol-col-titulo" variants={fadeUp}>
              POLITICAS DE PRIVACIDAD
            </motion.h3>

            <motion.ol className="pol-lista" variants={staggerContainer}>
              <motion.li variants={staggerItem}>
                <span className="pol-lista-label">Uso de informacion</span>
                <span className="pol-lista-texto">
                  Los datos de tu marca se usan unicamente para operar el servicio. Nunca se venden ni comparten con terceros.
                </span>
              </motion.li>
              <motion.li variants={staggerItem}>
                <span className="pol-lista-label">Confidencialidad</span>
                <span className="pol-lista-texto">
                  Tu estrategia, guiones y resultados son 100% confidenciales. No se comparte informacion con otras marcas.
                </span>
              </motion.li>
              <motion.li variants={staggerItem}>
                <span className="pol-lista-label">Contenido grabado</span>
                <span className="pol-lista-texto">
                  Todo el contenido producido en Bunker es de tu propiedad exclusiva.
                </span>
              </motion.li>
              <motion.li variants={staggerItem}>
                <span className="pol-lista-label">Seguridad de datos</span>
                <span className="pol-lista-texto">
                  El acceso a datos internos esta restringido al equipo necesario para brindar el servicio.
                </span>
              </motion.li>
            </motion.ol>
          </motion.div>

          <div className="pol-divider" />

          <motion.div
            className="pol-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.h3 className="pol-col-titulo pol-col-titulo-white" variants={fadeUp}>
              DISCLAIMER LEGAL
            </motion.h3>

            <motion.p className="pol-texto" variants={fadeUp}>
              Bunker provee infraestructura profesional de live selling, soporte tecnico y asesoria estrategica.
              <strong> No garantizamos resultados especificos en ventas</strong> — los resultados dependen del producto, estrategia y ejecucion del cliente.
            </motion.p>

            <motion.p className="pol-responsable" variants={fadeUp}>
              Como cliente, sos responsable de:
            </motion.p>

            <motion.ul className="pol-bullets" variants={staggerContainer}>
              <motion.li variants={staggerItem}>
                <strong>Cumplir con las politicas de TikTok y TikTok Shop</strong> — suspensiones por incumplimiento son responsabilidad del cliente.
              </motion.li>
              <motion.li variants={staggerItem}>
                Garantizar la <strong>legalidad de todos los productos</strong> segun regulaciones de FDA y FTC en USA.
              </motion.li>
              <motion.li variants={staggerItem}>
                El manejo de <strong>inventario, logistica y fulfillment</strong> de los pedidos generados en vivo.
              </motion.li>
              <motion.li variants={staggerItem}>
                Mantener los pagos al dia para conservar el acceso continuo al estudio.
              </motion.li>
            </motion.ul>

            <motion.div className="pol-sello" variants={fadeUp}>
              <img
                src="/sellos-bunker.png"
                alt="Bunker — Controlled Spaces. Real Results."
                className="pol-sello-img"
              />
            </motion.div>

          </motion.div>

        </div>

        <motion.div
          className="pol-cierre"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="pol-cierre-line" />
          <p className="pol-cierre-texto">
            "Empieza en Silver, crece en Gold y en Diamond<br />
            convertis tu marca en una maquina de ventas en TikTok Live."
          </p>
          <a href="#contacto" className="pol-cierre-cta">
            RESERVAR MI LUGAR AHORA
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Politicas