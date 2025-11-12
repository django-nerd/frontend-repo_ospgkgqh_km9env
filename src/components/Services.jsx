import { HeartPulse, Activity, Hospital, Syringe, Brain, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: HeartPulse, title: 'Kardiologi', desc: 'Perawatan jantung dengan teknologi terkini dan tim ahli.' },
  { icon: Brain, title: 'Neurologi', desc: 'Diagnosa dan terapi gangguan saraf secara komprehensif.' },
  { icon: Syringe, title: 'Vaksin & Imunisasi', desc: 'Layanan vaksin lengkap untuk segala usia.' },
  { icon: Activity, title: 'IGD 24/7', desc: 'Tanggap darurat sepanjang waktu dengan respon cepat.' },
  { icon: Hospital, title: 'Rawat Inap Modern', desc: 'Fasilitas nyaman, higienis, dan ramah keluarga.' },
  { icon: ShieldCheck, title: 'Keamanan Data', desc: 'Privasi pasien dilindungi dengan standar keamanan tinggi.' },
]

export default function Services(){
  return (
    <section id="layanan" className="relative bg-[#070b13] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Layanan Unggulan</h2>
          <p className="mt-2 text-white/70">Kami menghadirkan layanan terintegrasi berbasis teknologi.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({icon:Icon,title,desc},i)=> (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i*0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
