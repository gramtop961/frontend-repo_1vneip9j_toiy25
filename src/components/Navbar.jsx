import { useState } from 'react'
import { Menu, X, Users, Shield, Calendar, HelpCircle, Home as HomeIcon, Send } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const INVITE_URL = import.meta.env.VITE_DISCORD_INVITE || '#'

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">D</div>
            <span className="text-white font-semibold tracking-tight">Discord Hub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/"><span className="inline-flex items-center gap-2"><HomeIcon size={16}/> Home</span></NavItem>
            <NavItem to="/rules"><span className="inline-flex items-center gap-2"><Shield size={16}/> Rules</span></NavItem>
            <NavItem to="/roles"><span className="inline-flex items-center gap-2"><Users size={16}/> Roles</span></NavItem>
            <NavItem to="/events"><span className="inline-flex items-center gap-2"><Calendar size={16}/> Events</span></NavItem>
            <NavItem to="/faq"><span className="inline-flex items-center gap-2"><HelpCircle size={16}/> FAQ</span></NavItem>
            <NavItem to="/staff"><span className="inline-flex items-center gap-2"><Shield size={16}/> Staff</span></NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={INVITE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors">
              <Send size={16}/> Join Server
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-white hover:bg-white/10">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 space-y-1">
            <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
            <NavItem to="/rules" onClick={() => setOpen(false)}>Rules</NavItem>
            <NavItem to="/roles" onClick={() => setOpen(false)}>Roles</NavItem>
            <NavItem to="/events" onClick={() => setOpen(false)}>Events</NavItem>
            <NavItem to="/faq" onClick={() => setOpen(false)}>FAQ</NavItem>
            <NavItem to="/staff" onClick={() => setOpen(false)}>Staff</NavItem>
            <a href={INVITE_URL} target="_blank" rel="noreferrer" className="block px-3 py-2 rounded-md text-sm font-semibold text-white bg-indigo-600/90 hover:bg-indigo-600" onClick={() => setOpen(false)}>
              Join Server
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
