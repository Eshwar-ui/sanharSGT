import { motion } from 'framer-motion'

const standards = [
  { mark: 'HIPAA', label: 'Privacy & Security', tone: 'text-[#24528f]' },
  { mark: 'HL7', label: 'Health Data Exchange', tone: 'text-[#d7222a]' },
  { mark: 'DICOM', label: 'Medical Imaging', tone: 'text-[#14233f]' },
  { mark: 'CPT®', label: 'Procedural Terminology', tone: 'text-[#b8860b]' },
  { mark: 'ISO', label: '21500:2012 Project Guidance', tone: 'text-[#1d4f91]' },
  { mark: 'ISO 27001', label: 'Information Security', tone: 'text-[#9a6a00]' },
  { mark: 'GDPR', label: 'Data Protection', tone: 'text-[#3451b2]' },
  { mark: 'NABH', label: 'Healthcare Quality', tone: 'text-[#d22f39]' },
  { mark: 'ICD-10', label: 'Clinical Classification', tone: 'text-[#3c9e9a]' },
  { mark: 'ABDM', label: 'M1 · M2 · M3 Integrated', tone: 'text-[#243e78]' },
  { mark: 'QMS', label: 'Quality Approved', tone: 'text-[#a7780d]' },
]

const StandardMark = ({ item }) => (
  <div className="group flex h-[92px] w-[230px] shrink-0 items-center gap-4 rounded-2xl border border-heading/8 bg-background/80 px-5 transition-colors hover:bg-background">
    <div className={`flex h-14 min-w-14 items-center justify-center rounded-full border border-current/20 bg-white px-2 text-center text-sm font-black leading-tight ${item.tone}`}>
      {item.mark}
    </div>
    <div>
      <div className={`text-base font-extrabold leading-tight ${item.tone}`}>{item.mark}</div>
      <div className="mt-1 text-[11px] font-semibold leading-tight text-muted">{item.label}</div>
    </div>
  </div>
)

const TrustStandards = () => {
  const loop = [...standards, ...standards]

  return (
    <section aria-labelledby="trust-heading" className="overflow-hidden bg-surface py-14 md:py-20">
      <div className="container-custom mb-9 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-3 text-sm font-bold text-primary">Built for connected healthcare</p>
          <motion.h2
            id="trust-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-[30px] font-extrabold leading-tight sm:text-[40px] md:text-[48px]"
          >
            Standards that move healthcare forward.
          </motion.h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted md:text-right">
          Interoperability, information security and clinical data standards embedded across our platform ecosystem.
        </p>
      </div>

      <div className="trust-marquee relative">
        <div className="trust-marquee-track flex w-max gap-4 px-2">
          {loop.map((item, index) => <StandardMark item={item} key={`${item.mark}-${index}`} />)}
        </div>
      </div>

      <div className="container-custom mt-12">
        <div className="grid gap-6 border-t border-heading/10 pt-8 md:grid-cols-[220px_1fr] md:items-center">
          <div>
            <div className="text-sm font-extrabold text-heading">Clinical collaborations</div>
            <div className="mt-1 text-xs text-muted">Knowledge connected to care</div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex min-h-24 items-center gap-5 rounded-2xl bg-background px-6 py-5">
              <svg aria-hidden="true" viewBox="0 0 64 64" className="h-14 w-14 shrink-0 text-[#17104f]">
                <path d="M29 9v20c0 5-3 8-7 10l-5 3c-5 3-8 8-8 14h18c4 0 7-3 7-7V9m1 0v20c0 5 3 8 7 10l5 3c5 3 8 8 8 14H37c-4 0-7-3-7-7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-[#17104f]">Lung<span className="text-[#8d4b91]">Health</span></div>
                <div className="text-xs font-semibold text-muted">Clinical knowledge collaboration</div>
              </div>
            </div>
            <div className="flex min-h-24 items-center gap-5 rounded-2xl bg-background px-6 py-5">
              <div aria-hidden="true" className="grid h-14 w-14 shrink-0 grid-cols-3 overflow-hidden rounded-full">
                {['#68a7d3','#83bd48','#68a7d3','#83bd48','#e73770','#83bd48','#68a7d3','#83bd48','#68a7d3'].map((color, index) => (
                  <span key={index} style={{ backgroundColor: color }} />
                ))}
              </div>
              <div>
                <div className="text-2xl font-medium tracking-tight text-[#222b37]">Wolters Kluwer</div>
                <div className="text-xs font-semibold text-muted">Healthcare information collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustStandards
