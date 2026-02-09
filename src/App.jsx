import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Platforms from './components/Platforms'
import Organizations from './components/Organizations'
import WhyUs from './components/WhyUs'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Team from './components/Team'
import Locations from './components/Locations'
import Resources from './components/Resources'
import Careers from './components/Careers'
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
      <Team />
      <Locations />
      <WhyUs />
      <Resources />
      <Careers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
