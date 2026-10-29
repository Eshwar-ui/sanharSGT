import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import TrustStandards from './components/TrustStandards'
import Solutions from './components/Solutions'
import Platforms from './components/Platforms'
import Organizations from './components/Organizations'
import WhyUs from './components/WhyUs'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Locations from './components/Locations'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      {/* <Logos /> */}
      <Solutions />
      <Platforms />
      <Organizations />
      <Testimonial />
      <About />
      <TrustStandards />
      <Locations />
      <WhyUs />
      <Resources />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
