import { useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Registration(){
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    birth_date: '',
    gender: 'male',
    address: '',
    department: 'Kardiologi',
    preferred_date: '',
    symptoms: '',
  })

  const onChange = (e)=> setForm(prev=> ({...prev, [e.target.name]: e.target.value}))

  const onSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${API_BASE}/api/registrations`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Gagal mengirim pendaftaran')
      setMessage('Pendaftaran berhasil dikirim! Kode: ' + data.id)
      setForm({ full_name:'', email:'', phone:'', birth_date:'', gender:'male', address:'', department:'Kardiologi', preferred_date:'', symptoms:'' })
    } catch(err){
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="daftar" className="bg-[#0a0f1a] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Pendaftaran Online</h2>
          <p className="mt-2 text-white/70">Isi data Anda, kami akan konfirmasi melalui email atau WhatsApp.</p>
        </div>

        <motion.form onSubmit={onSubmit} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nama Lengkap">
              <input required name="full_name" value={form.full_name} onChange={onChange} className="input" placeholder="Nama lengkap" />
            </Field>
            <Field label="Email">
              <input required type="email" name="email" value={form.email} onChange={onChange} className="input" placeholder="nama@email.com" />
            </Field>
            <Field label="No. HP">
              <input required name="phone" value={form.phone} onChange={onChange} className="input" placeholder="08xxxx" />
            </Field>
            <Field label="Tanggal Lahir">
              <input type="date" name="birth_date" value={form.birth_date} onChange={onChange} className="input" />
            </Field>
            <Field label="Jenis Kelamin">
              <select name="gender" value={form.gender} onChange={onChange} className="input">
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
                <option value="other">Lainnya</option>
              </select>
            </Field>
            <Field label="Departemen">
              <select name="department" value={form.department} onChange={onChange} className="input">
                {['Kardiologi','Neurologi','Ortopedi','Anak','Umum'].map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </Field>
            <Field label="Tanggal Kunjungan">
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={onChange} className="input" />
            </Field>
            <Field label="Alamat" span>
              <input name="address" value={form.address} onChange={onChange} className="input" placeholder="Alamat lengkap" />
            </Field>
          </div>
          <Field label="Keluhan/Symptom" span>
            <textarea name="symptoms" value={form.symptoms} onChange={onChange} rows={4} className="input" placeholder="Ceritakan keluhan Anda" />
          </Field>

          <div className="flex items-center gap-4">
            <button disabled={loading} className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Mengirim...' : 'Kirim Pendaftaran'}
            </button>
            {message && <p className="text-white/80">{message}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function Field({label, children, span}){
  return (
    <label className={`${span ? 'sm:col-span-2' : ''}`}>
      <div className="mb-2 text-sm text-white/70">{label}</div>
      {children}
      <style>{`
        .input{ @apply w-full rounded-xl border border-white/10 bg-[#0d1320] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500/50; }
      `}</style>
    </label>
  )
}
