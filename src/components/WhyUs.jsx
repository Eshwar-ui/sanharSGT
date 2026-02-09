import { motion } from 'framer-motion'
import { whyUsContent } from '../data/whyUsContent'

const WhyUs = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    // Mapping icons to data
    const iconMap = [
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>,
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ]

    return (
        <section id="why-us" className="py-24 bg-surface-alt relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-linear-to-b from-primary/3 to-transparent pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft border border-accent/20 rounded-full text-accent text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm"
                    >
                        {whyUsContent.badge}
                    </motion.div>
                    <motion.h2 
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-heading tracking-[-0.03em] max-w-4xl mx-auto mb-6"
                    >
                        {whyUsContent.heading}
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-body text-base md:text-lg max-w-2xl mx-auto font-medium opacity-80"
                    >
                        {whyUsContent.description}
                    </motion.p>
                </div>

                {/* Core Cards Grid */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    {whyUsContent.cards.map((card, idx) => (
                        <motion.div 
                            key={idx}
                            variants={fadeIn}
                            className="bg-surface p-8 rounded-[32px] border border-border shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 bg-secondary-soft rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                {iconMap[idx]}
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-6 tracking-tight">{card.title}</h3>
                            <ul className="space-y-4">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-body font-medium">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Delivery Model & Tech Stack Row */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Delivery Model */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="xl:col-span-2 bg-surface p-8 md:p-12 rounded-card border border-border"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-2">{whyUsContent.methodology.badge}</div>
                                <h3 className="text-2xl md:text-3xl font-bold text-heading">{whyUsContent.methodology.title}</h3>
                            </div>
                            <div className="h-px flex-1 bg-border hidden md:block mx-8 opacity-50" />
                            <div className="text-sm font-bold text-muted italic">{whyUsContent.methodology.tagline}</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {/* Horizontal Line for Desktop */}
                            <div className="absolute top-[22px] left-0 w-full h-px bg-border hidden lg:block" />
                            
                            {whyUsContent.methodology.phases.map((phase, idx) => (
                                <div key={idx} className="relative z-10 group">
                                    <div className="w-12 h-12 bg-surface border-2 border-border rounded-full flex items-center justify-center text-xs font-black text-muted mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                                        {phase.id}
                                    </div>
                                    <h4 className="text-lg font-bold text-heading mb-1">{phase.title}</h4>
                                    <p className="text-xs text-body font-medium mb-3 opacity-70">{phase.desc}</p>
                                    <div className="inline-block px-3 py-1 bg-primary-soft rounded-full text-[10px] font-bold text-primary italic">
                                        {phase.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-heading p-8 md:p-12 rounded-card text-white relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-2">{whyUsContent.techStack.badge}</div>
                            <h3 className="text-2xl font-bold mb-8">{whyUsContent.techStack.title}</h3>
                            
                            <div className="space-y-6">
                                {whyUsContent.techStack.items.map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg group-hover:bg-primary transition-colors duration-300">
                                            {tech.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold">{tech.name}</div>
                                            <div className="text-[10px] text-white/40 font-medium tracking-tight">Enterprise Standard</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 text-xs font-medium text-white/60">
                            {whyUsContent.techStack.tagline}
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs

