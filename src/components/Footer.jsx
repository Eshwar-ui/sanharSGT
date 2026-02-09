import { motion } from 'framer-motion'

const Footer = () => {
  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Resources", href: "#resources" },
    { name: "Careers", href: "#careers" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookies Settings", href: "#" },
  ]

  return (
    <footer className="pt-24 pb-8 bg-surface border-t border-border overflow-hidden">
      <div className="container-custom">
        {/* Top Navigation Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 md:gap-x-10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-muted text-sm font-bold tracking-tight hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {legalLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-heading text-[12px] font-black uppercase tracking-widest border-b border-border hover:border-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Massive Branding Row */}
        <div className="relative flex justify-center w-full select-none pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold italic tracking-[-0.04em] leading-none text-transparent bg-clip-text bg-linear-to-b from-heading/30 via-heading/5 to-transparent pb-4"
            style={{
              fontSize: 'clamp(60px, 20vw, 320px)',
            }}
          >
            SanharSGT
          </motion.h2>

          {/* Copyright Floating */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[0.3em] uppercase text-muted/40">
            © 2024 Sanhar SGT. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

