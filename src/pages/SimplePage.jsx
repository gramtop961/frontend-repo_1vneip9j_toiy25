import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SimplePage({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
          <div className="text-white/80">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
