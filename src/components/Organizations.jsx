import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { industriesContent } from '../data/industriesContent'

gsap.registerPlugin(ScrollTrigger)

const Organizations = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate top section
      gsap.from(".org-top-section > *", {
        scrollTrigger: {
          trigger: ".org-top-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
      })

      // Animate bottom section
      gsap.from(".org-bottom-section > *", {
        scrollTrigger: {
          trigger: ".org-bottom-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
      })
    }, scrollRef)
    return () => ctx.revert()
  }, [])

  const renderButton = (text) => (
    <div className="flex gap-2 mt-auto">
      <button className="inline-flex items-center justify-center p-0 bg-transparent border border-transparent rounded-full text-[10px] font-black tracking-widest uppercase text-primary hover:text-heading transition-all duration-300 group w-fit">
        {text || "Learn More"}
        <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  )

  const renderSmallCard = (item, layout) => {
    const isImageLeft = layout === 'image-left'

    return (
      <div key={item.id} className={`bg-white border border-border rounded-[24px] md:rounded-[32px] flex flex-col md:grid md:grid-cols-2 gap-0 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500 group h-full`}>
        <div className={`flex flex-col items-start gap-4 p-6 md:p-8 ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
          <div className="flex-1">
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-3 block">{item.tagline}</span>
            <h3 className="text-xl md:text-2xl font-bold text-heading mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
            <p className="text-body text-xs md:text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
              {item.description}
            </p>
          </div>
          {renderButton(item.buttonText)}
        </div>
        <div className={`relative h-[240px] md:h-full overflow-hidden ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-heading/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
    )
  }

  const renderBigCard = (item, layout) => {
    const isImageTop = layout === 'image-top'

    return (
      <div key={item.id} className={`bg-white border border-border rounded-[24px] md:rounded-[32px] flex flex-col ${isImageTop ? "flex-col-reverse" : "flex-col"} overflow-hidden h-full hover:shadow-xl hover:border-primary/20 transition-all duration-500 group`}>
        <div className="flex-1 flex flex-col items-start gap-5 p-8 md:p-12">
          <div className="flex-1">
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-4 block">{item.tagline}</span>
            <h3 className="text-2xl md:text-4xl font-bold text-heading mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">{item.title}</h3>
            <p className="text-body text-sm md:text-base leading-relaxed max-w-xl opacity-70 group-hover:opacity-100 transition-opacity">
              {item.description}
            </p>
          </div>
          {renderButton(item.buttonText)}
        </div>
        <div className="h-[300px] md:h-[350px] w-full relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-heading/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
    )
  }

  return (
    <section id="industries" ref={scrollRef} className="py-24 px-6 md:px-12 bg-surface overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft border border-primary/10 rounded-full text-primary text-[10px] font-black tracking-widest uppercase mb-6"
          >
            {industriesContent.badge}
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] font-extrabold text-heading mb-6 tracking-[-0.03em] max-w-3xl mx-auto"
          >
            {industriesContent.heading}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-lg leading-relaxed text-body max-w-2xl mx-auto font-medium opacity-80"
          >
            {industriesContent.subheading}
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* Top Section: Stack Left, Big Right */}
          <div className="org-top-section grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              {industriesContent.topIndustries.slice(0, 2).map(item => renderSmallCard(item, 'text-left'))}
            </div>
            <div className="h-full">
              {renderBigCard(industriesContent.topIndustries[2], 'text-top')}
            </div>
          </div>

          {/* Bottom Section: Big Left, Stack Right */}
          <div className="org-bottom-section grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="h-full">
              {renderBigCard(industriesContent.bottomIndustries[2], 'image-top')}
            </div>
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              {industriesContent.bottomIndustries.slice(0, 2).map(item => renderSmallCard(item, 'image-left'))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Organizations

