const Footer = () => {
  return (
    <footer className="pt-40 pb-16 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        <div className="md:col-span-4">
            <div className="text-3xl font-black font-display tracking-tighter mb-10">
                Sanhar<span className="text-brand-purple">SGT</span>
            </div>
            <p className="text-xl text-slate-500 max-w-sm mb-12 font-medium leading-relaxed">
                Design and deliver enterprise-grade digital infrastructure for mission-critical organizations globally.
            </p>
            <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 hover:border-brand-purple transition-all cursor-pointer group">
                        <div className="w-5 h-5 bg-slate-200 group-hover:bg-brand-purple rounded-full" />
                    </div>
                ))}
            </div>
        </div>
        
        <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-slate-900 font-extrabold text-lg mb-8 uppercase tracking-widest text-sm">Solutions</h4>
            <ul className="space-y-4 text-slate-500 font-semibold">
                <li><a href="#" className="hover:text-brand-purple transition-colors">Hospital Management</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">Revenue Cycle</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">EHR Systems</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">Analytics</a></li>
            </ul>
        </div>

        <div className="md:col-span-2">
            <h4 className="text-slate-900 font-extrabold text-lg mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-slate-500 font-semibold">
                <li><a href="#" className="hover:text-brand-purple transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">Contact</a></li>
            </ul>
        </div>

        <div className="md:col-span-2 text-right">
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-16 h-16 bg-slate-950 rounded-[24px] flex items-center justify-center hover:bg-brand-purple transition-all shadow-xl group">
                <svg className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                </svg>
             </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-40 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 font-bold uppercase tracking-widest text-xs relative z-10">
        <div>© 2024 SANHARSGT INFRASTRUCTURE. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-12">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
        </div>
      </div>

      {/* Extreme Watermark Bottom */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[18vw] font-display font-black text-slate-50 select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter opacity-100 z-0">
        SANHARSGT
      </div>
    </footer>
  )
}

export default Footer
