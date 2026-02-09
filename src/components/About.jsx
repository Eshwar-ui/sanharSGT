import { motion } from 'framer-motion'
import { useRef } from 'react'
import { aboutContent } from '../data/aboutContent'

const About = () => {
    const sectionRef = useRef(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    }

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 bg-surface relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft border border-primary/10 rounded-full text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6"
                    >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        {aboutContent.badge}
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-heading tracking-[-0.03em] max-w-3xl mx-auto"
                    >
                        {aboutContent.heading}
                    </motion.h2>
                </div>

                {/* Bento Grid Layout */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6"
                >
                    {/* Main Story Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-8 p-8 md:p-12 rounded-[32px] bg-surface-alt border border-border relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-heading mb-6 tracking-tight">
                                    {aboutContent.mainStory.title}
                                </h3>
                                <div className="space-y-4 text-body text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                                    {aboutContent.mainStory.paragraphs.map((p, i) => (
                                        <p key={i} className={i > 0 ? "hidden md:block" : ""}>
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-border/50 flex flex-wrap gap-10">
                                {aboutContent.mainStory.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                                        <div className="text-xs font-bold text-muted uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors duration-700" />
                    </motion.div>

                    {/* Image/Visual Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 rounded-[32px] bg-heading overflow-hidden relative group min-h-[300px]"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1576089234280-2a3d3963220c?auto=format&fit=crop&q=80&w=800"
                            alt="Global Healthcare Tech"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                        <div className="absolute inset-0 bg-heading/40 z-10 group-hover:bg-heading/20 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                                    <div className="w-8 h-8 rounded-full border-2 border-white animate-ping" />
                                </div>
                                <h4 className="text-white text-xl font-bold mb-2">{aboutContent.visualCard.title}</h4>
                                <p className="text-white/80 text-sm font-medium">{aboutContent.visualCard.description}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-6 p-8 md:p-12 rounded-[32px] bg-primary text-white border border-primary/10 relative overflow-hidden group shadow-lg shadow-primary/10"
                    >
                        <div className="relative z-10">
                            <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60 mb-8 italic">{aboutContent.vision.label}</div>
                            <p className="text-2xl md:text-3xl font-bold leading-[1.3] tracking-tight">
                                "{aboutContent.vision.quote}"
                            </p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-6 p-8 md:p-12 rounded-[32px] bg-surface-alt border border-border relative overflow-hidden group transition-all duration-300 hover:border-primary/20 shadow-sm"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/60 mb-8">{aboutContent.mission.label}</div>
                            <p className="text-xl md:text-2xl font-bold text-heading leading-relaxed mb-6">
                                {aboutContent.mission.text}
                            </p>
                            <div className="mt-auto flex items-center gap-3 text-primary font-bold text-sm tracking-tight group-hover:gap-4 transition-all overflow-hidden whitespace-nowrap">
                                {aboutContent.mission.cta} 
                                <span className="text-xl">→</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Row */}
                    {aboutContent.features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            variants={itemVariants}
                            className="md:col-span-4 p-8 rounded-[32px] bg-surface border border-border shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <div className="w-4 h-4 rounded-full border-2 border-primary group-hover:border-white transition-colors" />
                            </div>
                            <div className="text-[10px] font-black tracking-widest uppercase text-muted mb-2">{feature.label}</div>
                            <h4 className="text-lg font-extrabold text-heading">{feature.title}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About


