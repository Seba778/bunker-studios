import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import '../styles/VideoKirk.css'
import { fadeUp, viewportOptions } from '../utils/animations'

function VideoKirk() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className="vk">

      <div className="vk-bg">
        <div className="vk-bg-glow" />
      </div>

      <div className="vk-inner">

        {/* Header */}
        <motion.div
          className="vk-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="vk-tag">CONOCÉ A BUNKER</span>
          <h2 className="vk-titulo">
            No hablamos de resultados.<br />
            <em>Los mostramos.</em>
          </h2>
          <p className="vk-subtitulo">
            Kirkland Fewell, especialista en TikTok Shop, te explica
            por qué Bunker es la infraestructura que tu marca necesita
            para vender en vivo todos los días.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          className="vk-video-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Marco decorativo */}
          <div className="vk-frame">
            <span className="vkf vkf-tl" />
            <span className="vkf vkf-tr" />
            <span className="vkf vkf-bl" />
            <span className="vkf vkf-br" />
          </div>

          <div className="vk-video-container">
            <video
              ref={videoRef}
              className="vk-video"
              poster=""
              controls={playing}
              onEnded={() => setPlaying(false)}
              playsInline
            >
              <source src="/kirk-video.mp4" type="video/mp4" />
            </video>

            {!playing && (
              <div className="vk-overlay" onClick={handlePlay}>
                <div className="vk-play-btn">
                  <div className="vk-play-glow" />
                  <div className="vk-play-circle">
                    <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                      <path d="M8 5L19 12L8 19V5Z" fill="#000" />
                    </svg>
                  </div>
                  <p className="vk-play-label">VER PRESENTACIÓN</p>
                </div>
              </div>
            )}
          </div>

        </motion.div>

        {/* CTA debajo del video */}
        <motion.div
          className="vk-cta-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <a href="#membership" className="vk-cta-primary">
            VER PLANES Y PRECIOS
          </a>
          <a href="#contacto" className="vk-cta-secondary">
            HABLAR CON EL EQUIPO
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default VideoKirk