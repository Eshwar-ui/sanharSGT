import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Testimonial = () => {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-content > *", {
        scrollTrigger: {
          trigger: ".testimonial-content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      })
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="py-40 px-6 bg-surface-alt border-y border-border overflow-hidden text-center">
      <div className="max-w-5xl mx-auto testimonial-content">
        <div className="flex justify-center gap-1.5 mb-12 text-primary">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-[32px] md:text-[48px] leading-[1.2] font-semibold text-heading mb-16 italic font-display px-4">
          "A customer testimonial that highlights features and ensures potential customer results about your product or service. Shreemal testimonials from a similar demographic to your customers."
        </blockquote>

        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-2xl font-black text-white shadow-xl shadow-primary/30">
            SM
          </div>
          <div>
            <div className="text-2xl font-extrabold text-heading">Sadheer Mathews</div>
            <div className="text-muted font-bold uppercase tracking-widest text-sm mt-1">Director, MediSystems</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
