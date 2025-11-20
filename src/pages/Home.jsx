import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { About } from '../components/Sections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}
