import { useState } from 'react'
import { Menu, Stethoscope, Home, ClipboardList, Shield, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#', label: 'Beranda', icon: Home },
    { href: '#layanan', label: 'Layanan', icon: Stethoscope },
    { href: '#daftar', label: 'Daftar Online', icon: ClipboardList },
    { href: '#tentang', label: 'Tentang', icon: Shield },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070a12]/70 backdrop-blur supports-[backdrop-filter]:bg-[#070a12]/50 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
            <Stethoscope size={20} />
          </div>
          <span className="text-sm font-bold tracking-wide">RS BlueCare</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="transition hover:text-white">{label}</a>
          ))}
          <a href="/admin" className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20">Admin</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#070a12]/90 text-white">
          <div className="mx-auto max-w-7xl px-6 py-3 grid gap-3">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="py-2">{label}</a>
            ))}
            <a href="/admin" className="rounded-full bg-white/10 px-4 py-2 w-max">Admin</a>
          </div>
        </div>
      )}
    </header>
  )
}
