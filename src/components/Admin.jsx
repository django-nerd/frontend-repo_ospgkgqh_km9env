import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Admin(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await fetch(`${API_BASE}/api/admin/registrations`)
        const data = await res.json()
        if(!res.ok) throw new Error(data.detail || 'Gagal memuat data')
        setItems(data)
      }catch(e){ setError(e.message) }
      finally{ setLoading(false) }
    }
    load()
  },[])

  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <p className="text-white/60">Lihat pendaftaran terbaru.</p>
        {loading && <p className="mt-6">Memuat...</p>}
        {error && <p className="mt-6 text-red-400">{error}</p>}
        <div className="mt-8 grid gap-4">
          {items.map((it)=> (
            <div key={it.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{it.full_name}</p>
                  <p className="text-sm text-white/60">{it.department} • {it.preferred_date || 'TBA'}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{it.status}</span>
              </div>
            </div>
          ))}
          {!loading && items.length === 0 && <p>Tidak ada data.</p>}
        </div>
      </div>
    </div>
  )
}
