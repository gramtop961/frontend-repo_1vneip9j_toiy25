export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Discord Hub — Unofficial fan community</p>
        <div className="flex items-center gap-4 text-white/70">
          <a href="/rules" className="hover:text-white">Rules</a>
          <a href="/faq" className="hover:text-white">FAQ</a>
          <a href="/staff" className="hover:text-white">Staff</a>
        </div>
      </div>
    </footer>
  )
}
