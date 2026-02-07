import { motion } from 'framer-motion'

const Team = () => {
  const leaders = [
    { name: "Paul Mathews", role: "CEO & Founder", initial: "PM", color: "from-brand-purple to-purple-400" },
    { name: "Sarah Evans", role: "COO", initial: "SE", color: "from-brand-cyan to-blue-400" },
    { name: "John Doe", role: "CTO", initial: "JD", color: "from-pink-500 to-rose-400" },
  ]

  return (
    <section className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-20">Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className={`w-40 h-40 mx-auto rounded-full bg-gradient-to-br ${leader.color} p-1 mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-4xl font-display font-black">
                  {leader.initial}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{leader.name}</h3>
              <p className="text-slate-500 font-semibold uppercase tracking-widest text-xs">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
