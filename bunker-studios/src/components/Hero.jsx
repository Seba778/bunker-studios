import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setLoaded(true)
    v.addEventListener('canplay', onCanPlay)
    return () => v.removeEventListener('canplay', onCanPlay)
  }, [])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    const newMuted = !v.muted
    v.muted = newMuted
    setMuted(newMuted)
    if (!newMuted) {
      v.play().catch(() => {
        v.muted = true
        setMuted(true)
      })
    }
  }

  return (
    <section className="hero" id="hero">

      <video
        ref={videoRef}
        className={`hero-video${loaded ? ' loaded' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/kirk-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-center">
        <motion.p
          className="hero-pre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          CONTROLLED SPACES. REAL RESULTS.
        </motion.p>

        <motion.h1
          className="hero-brand"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          BUNKER
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          AGENCY &nbsp;&middot;&nbsp; STUDIO &nbsp;&middot;&nbsp; GROWTH PARTNER
        </motion.p>

        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <a href="#membership" className="hero-btn-gold">VER MEMBRESIAS</a>
          <a href="/tiktok" className="hero-btn-ghost">ABRE TU TIENDA</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="hero-stat">
          <p className="hero-stat-num">+40</p>
          <p className="hero-stat-label">Marcas activas</p>
        </div>
        <div className="hero-stat-sep" />
        <div className="hero-stat">
          <p className="hero-stat-num">3</p>
          <p className="hero-stat-label">Planes disponibles</p>
        </div>
        <div className="hero-stat-sep" />
        <div className="hero-stat">
          <p className="hero-stat-num">USA</p>
          <p className="hero-stat-label">Mercado hispano</p>
        </div>
        <div className="hero-stat-sep" />
        <div className="hero-stat">
          <p className="hero-stat-num">+2M USD</p>
          <p className="hero-stat-label">En ventas</p>
        </div>
      </motion.div>

      {/* Botón mute simple */}
      <button
        className={`hero-audio-btn${muted ? ' is-muted' : ' is-on'}`}
        onClick={toggleMute}
        aria-label={muted ? 'Activar audio' : 'Silenciar'}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 5.5C20.5 7.5 21.5 10 21.5 12C21.5 14 20.5 16.5 18.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M15.5 8.5C16.8 9.8 17.5 10.9 17.5 12C17.5 13.1 16.8 14.2 15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
        <span>{muted ? 'MUTED' : 'SOUND ON'}</span>
      </button>

    </section>
  )
}

export default Hero