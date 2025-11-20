import { Shield, Users, Calendar, Hash, Bot, MessageCircle } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What is this place?</h2>
          <p className="text-white/80 leading-relaxed">
            We're a community-focused Discord server made for friendly conversations, game nights, and helping each other out. We keep things inclusive, organized, and fun with channels for every topic and a friendly staff team.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <Users className="text-indigo-300 mb-2"/>
            <p className="text-white font-semibold">Active Community</p>
            <p className="text-white/70 text-sm">Daily chats and regular events</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <Shield className="text-indigo-300 mb-2"/>
            <p className="text-white font-semibold">Safe & Welcoming</p>
            <p className="text-white/70 text-sm">Clear rules and helpful staff</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <Calendar className="text-indigo-300 mb-2"/>
            <p className="text-white font-semibold">Events</p>
            <p className="text-white/70 text-sm">Movie nights, game lobbies, study sessions</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <Hash className="text-indigo-300 mb-2"/>
            <p className="text-white font-semibold">Organized Channels</p>
            <p className="text-white/70 text-sm">Find exactly what you're looking for</p>
          </div>
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
          <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white font-semibold">{i + 1}. {r.title}</p>
            <p className="text-white/70">{r.desc}</p>
          </div>
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
        {roles.map((role) => (
          <div key={role.name} className="p-5 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-1">
              <span className={`inline-block w-3 h-3 rounded-full ${role.color}`} />
              <p className="text-white font-semibold">{role.name}</p>
            </div>
            <p className="text-white/70 text-sm">{role.desc}</p>
          </div>
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
          <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">{e.title}</p>
              <span className="text-xs text-white/60">{e.date}</span>
            </div>
            <p className="text-white/70">{e.desc}</p>
          </div>
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
          <details key={i} className="group bg-white/5 border border-white/10 rounded-lg p-4">
            <summary className="list-none cursor-pointer text-white font-semibold">{item.q}</summary>
            <p className="text-white/70 mt-2">{item.a}</p>
          </details>
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
        {staff.map((s) => (
          <div key={s.name} className="p-5 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white font-semibold">{s.name} <span className={`text-sm ${s.color}`}>({s.role})</span></p>
            <p className="text-white/60 text-sm">{s.tag}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
