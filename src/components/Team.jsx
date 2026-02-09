import { motion } from 'framer-motion'
import { teamContent } from '../data/teamContent'

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft border border-primary/10 rounded-full text-primary text-[10px] font-black tracking-widest uppercase mb-6"
          >
            {teamContent.badge}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[52px] leading-[1.1] font-extrabold text-heading tracking-[-0.03em] max-w-2xl mx-auto"
          >
            {teamContent.heading}
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamContent.leaders.map((leader) => (
            <motion.div
              key={leader.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="bg-surface-alt border border-border rounded-[32px] p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                {/* Avatar Image */}
                <div className="w-28 h-28 mb-6 rounded-full bg-primary/5 p-1 border border-primary/10 relative overflow-hidden transition-all duration-500 group-hover:border-primary">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {leader.image ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary text-white text-2xl font-black">
                        {leader.initial}
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-heading mb-1">{leader.name}</h3>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">{leader.role}</p>
                <div className="w-8 h-0.5 bg-border group-hover:bg-primary group-hover:w-16 transition-all duration-500 mb-4" />
                <p className="text-body text-sm font-medium leading-relaxed opacity-70">
                  {leader.bio}
                </p>

                {/* Social Links (Static for now) */}
                <div className="mt-auto pt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition-all">in</div>
                   <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition-all">𝕏</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team


