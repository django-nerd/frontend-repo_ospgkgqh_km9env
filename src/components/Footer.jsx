export default function Footer(){
  return (
    <footer className="bg-[#070b13] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} RS BlueCare. Semua hak dilindungi.</p>
        <p className="text-white/50">Dibangun dengan teknologi modern untuk pelayanan kesehatan terbaik.</p>
      </div>
    </footer>
  )
}
