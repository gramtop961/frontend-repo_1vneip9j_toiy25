import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Send, Users, Sparkles } from 'lucide-react'

const INVITE_URL = import.meta.env.VITE_DISCORD_INVITE || '#'

function TiltCard({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12])

  function onMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-[260px] h-[160px] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent border border-white/10 overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl p-5 flex flex-col items-start justify-end backdrop-blur-[2px]"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="absolute -inset-24 bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-400/10 via-sky-400/10 to-indigo-400/10 animate-[spin_12s_linear_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs text-white/80 mb-1">
            <Sparkles size={14} className="text-indigo-300" /> Featured
          </div>
          <p className="text-white font-semibold leading-tight">Community Vibes</p>
          <p className="text-white/70 text-sm">Events • Roles • Friendly Staff</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* floating 3D lights */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/40 blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0], scale: [1, 1.05, 0.98, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-500/40 blur-3xl"
          animate={{ x: [0, -15, 10, 0], y: [0, 12, -8, 0], scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white mb-6 border border-white/10"
        >
          <Sparkles size={14}/> Welcome to our Community
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
        >
          Your cozy corner on Discord
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
        >
          Chill chats, friendly vibes, game nights, and helpful channels. Come hang out and make new friends.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-colors shadow-lg shadow-indigo-500/20"
          >
            <Send size={18}/> Join the server
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Learn more
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-10 text-white/70 text-sm"
        >
          <span className="inline-flex items-center gap-2"><Users size={16}/> 2,000+ members</span>
        </motion.div>

        {/* 3D tilt showcase */}
        <div className="mt-12 flex justify-center">
          <TiltCard />
        </div>
      </div>
    </section>
  )
}
