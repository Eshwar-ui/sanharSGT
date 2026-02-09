import { motion } from 'framer-motion'
import { contactContent } from '../data/contactContent'

const Contact = () => {
    const iconMap = [
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>,
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>,
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ]

    return (
        <section id="contact" className="py-24 bg-surface text-heading relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
            
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Content */}
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-soft border border-primary/10 rounded-full text-primary text-[10px] font-black tracking-widest uppercase mb-6"
                        >
                            {contactContent.badge}
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold tracking-[-0.03em] mb-8"
                        >
                            {contactContent.heading}
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-body text-base md:text-lg max-w-lg mb-12 font-medium opacity-80"
                        >
                            {contactContent.description}
                        </motion.p>

                        <div className="space-y-8">
                            {contactContent.info.map((info, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-12 h-12 bg-surface-alt border border-border rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                        {iconMap[i]}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black tracking-widest uppercase text-muted mb-1">{info.title}</div>
                                        <div className="text-lg font-bold text-heading">{info.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-surface-alt border border-border rounded-card p-8 md:p-12 shadow-sm relative group overflow-hidden"
                    >
                        <form className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-muted ml-1">{contactContent.form.fields.name.label}</label>
                                    <input type="text" className="w-full bg-white border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder={contactContent.form.fields.name.placeholder} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-muted ml-1">{contactContent.form.fields.org.label}</label>
                                    <input type="text" className="w-full bg-white border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder={contactContent.form.fields.org.placeholder} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase tracking-widest text-muted ml-1">{contactContent.form.fields.email.label}</label>
                                <input type="email" className="w-full bg-white border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all" placeholder={contactContent.form.fields.email.placeholder} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase tracking-widest text-muted ml-1">{contactContent.form.fields.details.label}</label>
                                <textarea rows="4" className="w-full bg-white border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none" placeholder={contactContent.form.fields.details.placeholder}></textarea>
                            </div>
                            <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]">
                                {contactContent.form.buttonText}
                            </button>
                        </form>

                        {/* Animated background shape */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
