import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Features from './sections/Features'
import Collections from './sections/Collections'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FFF8E9] text-[#193D32]">
        <Hero />
        {/* <Features /> */}
        <Collections />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App