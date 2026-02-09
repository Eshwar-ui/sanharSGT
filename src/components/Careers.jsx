import { motion } from 'framer-motion'
import { useRef } from 'react'
import { careersContent } from '../data/careersContent'

const Careers = () => {
  const container = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="careers" ref={container} className="py-24 px-6 bg-surface overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft border border-primary/10 rounded-full text-primary text-[10px] font-black tracking-widest uppercase mb-6"
            >
              {careersContent.badge}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-heading tracking-[-0.03em]"
            >
              {careersContent.heading}
            </motion.h2>
          </div>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:text-right"
          >
            <p className="text-body text-base md:text-lg max-w-xs md:ml-auto">
              {careersContent.description}
            </p>
          </motion.div>
        </div>

        {/* Job List Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {careersContent.jobs.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="group relative bg-surface-alt border border-border rounded-2xl p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 md:items-center gap-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-primary/20"
            >
              <div className="md:col-span-5">
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest mb-2 block">{job.dept}</span>
                <h3 className="text-xl md:text-2xl font-bold text-heading group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
              </div>
              
              <div className="md:col-span-4 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-muted text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-border" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-muted text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-border" />
                  {job.type}
                </div>
              </div>

              <div className="md:col-span-3 md:text-right">
                <button className="inline-flex items-center gap-2 text-sm font-bold text-heading group-hover:text-primary transition-all">
                  View Position
                  <span className="w-8 h-8 rounded-full bg-border group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                    →
                  </span>
                </button>
              </div>
              
              {/* Highlight line on hover */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-12 transition-all duration-500 rounded-r-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Culture Teaser */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 p-8 md:p-12 bg-heading rounded-card relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{careersContent.cta.title}</h3>
              <p className="text-white/60 max-w-md">
                {careersContent.cta.description}
              </p>
            </div>
            <button className="bg-white text-heading px-8 py-4 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-lg">
              {careersContent.cta.buttonText}
            </button>
          </div>
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </motion.div>
      </div>
    </section>
  )
}

export default Careers


