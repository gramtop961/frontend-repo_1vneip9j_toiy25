import { Send, Users, Sparkles } from 'lucide-react'

const INVITE_URL = import.meta.env.VITE_DISCORD_INVITE || '#'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-500/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white mb-6 border border-white/10">
          <Sparkles size={14}/> Welcome to our Community
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Your cozy corner on Discord</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Chill chats, friendly vibes, game nights, and helpful channels. Come hang out and make new friends.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={INVITE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-colors">
            <Send size={18}/> Join the server
          </a>
          <a href="#about" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Learn more</a>
        </div>
        <div className="mt-10 text-white/70 text-sm">
          <span className="inline-flex items-center gap-2"><Users size={16}/> 2,000+ members</span>
        </div>
      </div>
    </section>
  )
}
