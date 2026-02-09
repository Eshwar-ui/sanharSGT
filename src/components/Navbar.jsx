import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current
    if (diff > 10 && latest > 150) {
      if (!isOpen) setIsVisible(false)
    } else if (diff < -10) {
      setIsVisible(true)
    }
    if (latest < 50) setIsVisible(true)
    lastScrollY.current = latest
  })

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Careers', href: '#careers' },
  ]

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center pointer-events-auto">
        {/* Main Pill - Ultra-Premium Glassmorphism */}
        <div className="flex items-center gap-1 bg-white/25 backdrop-blur-xl backdrop-saturate-180 border border-white/50 p-1.5 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,0.3)] hover:bg-white/35">
          
          {/* Logo Section */}
          <a href="#hero" className="flex items-center pl-5 pr-3 group">
            <div className="text-xl font-black italic tracking-tighter transition-transform duration-300 group-hover:scale-105">
              <span className="text-heading">S</span>
              <span className="text-primary">anhar</span>
              <span className="text-heading">SGT</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-[13px] font-bold text-heading/80 hover:text-primary transition-colors duration-300"
              >
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        type: "spring", 
                        bounce: 0.15, 
                        duration: 0.5 
                      }}
                      className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    />
                  )}
                </AnimatePresence>
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-heading/10 hidden lg:block mx-2" />

          {/* CTA / Contact Button */}
          <div className="flex items-center gap-2">
            <a 
              href="#contact" 
              className="hidden lg:block px-6 py-2.5 bg-primary text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-2xl hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95"
            >
              Contact
            </a>

            {/* Mobile Burger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-2xl transition-all active:scale-90 hover:bg-primary/5 pl-1"
            >
              <motion.span 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-5 h-0.5 bg-heading rounded-full"
              />
              <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-5 h-0.5 bg-heading rounded-full"
              />
              <motion.span 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-5 h-0.5 bg-heading rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu Overlay - Enhanced Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-24 left-4 right-4 bg-white/70 backdrop-blur-[32px] border border-white/50 p-8 rounded-[32px] shadow-2xl z-40 lg:hidden pointer-events-auto"
          >
            <div className="grid grid-cols-1 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-xl font-bold text-heading hover:text-primary transition-all group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                </motion.a>
              ))}
              <div className="h-px bg-heading/10 my-4" />
              <motion.a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-primary text-white text-center font-bold rounded-2xl shadow-xl shadow-primary/20"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
