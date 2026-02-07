import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Portfolio = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      })
      gsap.from(".portfolio-item", {
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const items = [
    { title: "Healthcare IT", color: "bg-[#F3F4F6]", h: "h-[420px]" },
    { title: "Enterprise Systems", color: "bg-[#E5E7EB]", h: "h-[320px]" },
    { title: "Digital Infrastructure", color: "bg-[#F3F4F6]", h: "h-[500px]" },
    { title: "Analytics Engine", color: "bg-[#E5E7EB]", h: "h-[380px]" },
    { title: "Governance Portals", color: "bg-[#F3F4F6]", h: "h-[450px]" },
    { title: "Insurance Tech", color: "bg-[#E5E7EB]", h: "h-[400px]" },
    { title: "Cloud Strategy", color: "bg-[#F3F4F6]", h: "h-[350px]" },
  ]

  return (
    <section ref={containerRef} className="py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="portfolio-header text-center mb-24">
          <h2 className="text-[44px] md:text-[56px] font-extrabold mb-6 text-heading">Comprehensive Digital <br/> Systems Portfolio</h2>
          <p className="text-lg text-body max-w-2xl mx-auto font-medium">
            From healthcare IT to enterprise platforms, we deliver specialized systems designed for complex organizations.
          </p>
        </div>

        <div className="portfolio-grid columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`portfolio-item break-inside-avoid card-premium ${item.h} p-10 flex flex-col justify-end group cursor-pointer`}
            >
              <div className="w-16 h-16 bg-surface rounded-2xl mb-8 flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-500">
                <div className="w-6 h-6 bg-surface-alt group-hover:bg-white/30 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-heading">{item.title}</h3>
              <p className="text-muted mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Solution</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
