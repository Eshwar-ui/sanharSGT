import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonialsContent } from '../data/testimonialsContent'

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsContent.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-20 px-6 bg-white overflow-hidden text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center min-h-[400px]">
        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-8 text-yellow-400">
          {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <div className="relative w-full flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Quote */}
              <blockquote className="text-xl md:text-3xl lg:text-4xl leading-snug font-bold text-heading mb-10 max-w-3xl">
                "{testimonialsContent[activeIndex].quote}"
              </blockquote>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={testimonialsContent[activeIndex].image} 
                    alt={testimonialsContent[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <div className="text-base font-bold text-heading">{testimonialsContent[activeIndex].author}</div>
                  <div className="text-sm text-body font-medium">{testimonialsContent[activeIndex].position}, {testimonialsContent[activeIndex].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2 mt-12">
          {testimonialsContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
