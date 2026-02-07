import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Platforms from './components/Platforms'
import Organizations from './components/Organizations'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Team from './components/Team'
import Locations from './components/Locations'
import Careers from './components/Careers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-surface min-h-screen">
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
      <Careers />
      <Footer />
    </div>
  )
}

export default App
