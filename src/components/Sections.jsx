import { Shield, Users, Calendar, Hash, Bot, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06 } }),
}

export function About() {
  const cards = [
    { icon: Users, title: 'Active Community', desc: 'Daily chats and regular events' },
    { icon: Shield, title: 'Safe & Welcoming', desc: 'Clear rules and helpful staff' },
    { icon: Calendar, title: 'Events', desc: 'Movie nights, game lobbies, study sessions' },
    { icon: Hash, title: 'Organized Channels', desc: 'Find exactly what you\'re looking for' },
  ]

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-white mb-3">What is this place?</motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 leading-relaxed">
            We\'re a community-focused Discord server made for friendly conversations, game nights, and helping each other out. We keep things inclusive, organized, and fun with channels for every topic and a friendly staff team.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <c.icon className="text-indigo-300 mb-2" />
              <p className="text-white font-semibold">{c.title}</p>
              <p className="text-white/70 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Rules() {
  const rules = [
    { title: 'Be respectful', desc: 'No harassment, hate speech, or personal attacks.' },
    { title: 'Keep it safe for work', desc: 'No NSFW content or overly graphic material.' },
    { title: 'Use the right channels', desc: 'Stay on topic and avoid spam.' },
    { title: 'No self-promo without permission', desc: 'Ask staff first before posting invites or ads.' },
    { title: 'Follow Discord TOS', desc: 'Breaking the rules can result in warnings or bans.' },
  ]

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Server Rules</h2>
      <div className="space-y-4">
        {rules.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="p-5 rounded-lg bg-white/5 border border-white/10"
          >
            <p className="text-white font-semibold">{i + 1}. {r.title}</p>
            <p className="text-white/70">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Roles() {
  const roles = [
    { name: 'Owner', color: 'bg-rose-500', desc: 'Server founder and admin.' },
    { name: 'Admin', color: 'bg-indigo-500', desc: 'Helps run the server and decisions.' },
    { name: 'Moderator', color: 'bg-emerald-500', desc: 'Keeps chat safe and on-topic.' },
    { name: 'Member', color: 'bg-slate-500', desc: 'Everyone who joins the community.' },
    { name: 'Bot', color: 'bg-yellow-500', desc: 'Automations, utility, and fun.' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Role Colors</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role, i) => (
          <motion.div
            key={role.name}
            initial={{ opacity: 0, y: 8, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-5 rounded-lg bg-white/5 border border-white/10 will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className={`inline-block w-3 h-3 rounded-full ${role.color}`} />
              <p className="text-white font-semibold">{role.name}</p>
            </div>
            <p className="text-white/70 text-sm">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Events() {
  const events = [
    { title: 'Movie Night', date: 'Fridays 8 PM', desc: 'Vote on films and watch together.' },
    { title: 'Among Us Lobby', date: 'Saturdays 6 PM', desc: 'Trust no one. Or do.' },
    { title: 'Study / Cowork Session', date: 'Daily 10 AM', desc: 'Mic off, cameras optional, get things done.' },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Events</h2>
      <div className="space-y-4">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-5 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">{e.title}</p>
              <span className="text-xs text-white/60">{e.date}</span>
            </div>
            <p className="text-white/70">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    { q: 'How do I join?', a: 'Click the Join button and accept the invite.' },
    { q: 'Do I need a mic?', a: 'Nope! Many members text-only.' },
    { q: 'How do I get roles?', a: 'Introduce yourself and check the roles channel.' },
    { q: 'What are the rules?', a: 'Be kind, keep it safe, and follow channels.' },
  ]

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((item, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group bg-white/5 border border-white/10 rounded-lg p-4"
          >
            <summary className="list-none cursor-pointer text-white font-semibold">{item.q}</summary>
            <p className="text-white/70 mt-2">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  )
}

export function Staff() {
  const staff = [
    { name: 'Alex', role: 'Owner', tag: '@alex', color: 'text-rose-300' },
    { name: 'Sam', role: 'Admin', tag: '@sam', color: 'text-indigo-300' },
    { name: 'Mira', role: 'Mod', tag: '@mira', color: 'text-emerald-300' },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Staff Team</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {staff.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="p-5 rounded-lg bg-white/5 border border-white/10"
          >
            <p className="text-white font-semibold">{s.name} <span className={`text-sm ${s.color}`}>({s.role})</span></p>
            <p className="text-white/60 text-sm">{s.tag}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
