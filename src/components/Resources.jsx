import { motion } from 'framer-motion'
import { resourcesContent } from '../data/resourcesContent'

const Resources = () => {
    const iconMap = [
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>,
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
    ]

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
        <section id="resources" className="py-24 bg-surface-alt relative overflow-hidden">
            <div className="container-custom">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm"
                    >
                        {resourcesContent.badge}
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-heading tracking-[-0.03em] max-w-3xl mx-auto mb-6"
                    >
                        {resourcesContent.heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-body text-base md:text-lg max-w-2xl mx-auto font-medium opacity-70"
                    >
                        {resourcesContent.description}
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {resourcesContent.categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-surface border border-border rounded-card p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 group"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                {iconMap[idx]}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-heading mb-4 tracking-tight group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-body text-sm leading-relaxed mb-8 opacity-70">
                                {category.desc}
                            </p>
                            
                            <div className="mt-auto space-y-4">
                                {category.links.map((link, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-heading/80 hover:text-primary cursor-pointer transition-colors group/link">
                                        <span className="text-primary opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Newsletter/CTA Row */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 bg-heading rounded-card relative overflow-hidden group shadow-2xl"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left">
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">{resourcesContent.cta.title}</h3>
                            <p className="text-white/60 max-w-md">
                                {resourcesContent.cta.description}
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                             <input 
                                type="email" 
                                placeholder="Email address"
                                className="bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary flex-1 md:w-64"
                             />
                             <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                                {resourcesContent.cta.buttonText}
                             </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Resources

