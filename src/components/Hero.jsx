import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#05070d] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-[#05070d]/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_10%_50%,rgba(0,150,255,0.25),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-end px-6 py-28 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right text-4xl font-extrabold sm:text-6xl leading-tight"
        >
          Rumah Sakit Futuristik
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sehat dengan Teknologi</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-2xl text-right text-white/80"
        >
          Portofolio rumah sakit dengan tampilan modern, animasi halus, dan pengalaman interaktif. Dilengkapi pendaftaran online yang cepat dan aman.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a href="#daftar" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400">
            Daftar Online
          </a>
          <a href="#layanan" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40">
            Jelajahi Layanan
          </a>
        </motion.div>
      </div>
    </section>
  )
}
