import { motion } from 'framer-motion'
import { locationsContent } from '../data/locationsContent'

const Locations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="locations" className="py-24 px-6 bg-surface-alt border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft border border-primary/10 rounded-full text-primary text-[10px] font-black tracking-widest uppercase mb-6"
            >
              {locationsContent.badge}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[52px] leading-[1.1] font-extrabold text-heading tracking-[-0.03em]"
            >
              {locationsContent.heading}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body text-base md:text-lg max-w-xs"
          >
            {locationsContent.description}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locationsContent.offices.map((office) => (
            <motion.div 
              key={office.city}
              variants={itemVariants}
              className="group bg-surface border border-border rounded-card p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden rounded-t-card">
                <img 
                  src={office.image} 
                  alt={office.city}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-30 group-hover:opacity-10 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-primary shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-heading mb-1">{office.city}</h3>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-6">{office.country}</p>
              
              <div className="space-y-1">
                <p className="text-xs text-muted font-bold tracking-tight uppercase">{office.type}</p>
                <p className="text-[13px] text-body font-medium leading-tight opacity-70 group-hover:opacity-100 transition-opacity italic">{office.address}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Locations


