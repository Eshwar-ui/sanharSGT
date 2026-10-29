import { motion } from 'framer-motion'

const standards = [
  { mark: 'HIPAA', label: 'Privacy & Security', tone: 'text-[#24528f]', img: '/certifications/hipaa.webp' },
  { mark: 'HL7', label: 'Health Data Exchange', tone: 'text-[#d7222a]', img: '/certifications/hl7.webp' },
  { mark: 'DICOM', label: 'Medical Imaging', tone: 'text-[#14233f]', img: '/certifications/dicom.webp' },
  { mark: 'CPT®', label: 'Procedural Terminology', tone: 'text-[#b8860b]', img: '/certifications/cpt.webp' },
  { mark: 'ISO', label: '21500:2012 Project Guidance', tone: 'text-[#1d4f91]', img: '/certifications/iso21500.webp' },
  { mark: 'ISO 27001', label: 'Information Security', tone: 'text-[#9a6a00]', img: '/certifications/iso27001.webp' },
  { mark: 'GDPR', label: 'Data Protection', tone: 'text-[#3451b2]', img: '/certifications/gdpr.webp' },
  { mark: 'NABH', label: 'Healthcare Quality', tone: 'text-[#d22f39]', img: '/certifications/nabh.webp' },
  { mark: 'ICD-10', label: 'Clinical Classification', tone: 'text-[#3c9e9a]', img: '/certifications/icd10.webp' },
  { mark: 'ABDM', label: 'M1 · M2 · M3 Integrated', tone: 'text-[#243e78]', img: '/certifications/abdm.webp' },
  { mark: 'QMS', label: 'Quality Approved', tone: 'text-[#a7780d]', img: '/certifications/qms.webp' },
]

const StandardMark = ({ item }) => (
  <div className="group flex h-28 w-67 shrink-0 items-center rounded-2xl border border-heading/8 bg-white px-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
    {item.img ? (
      <div className="flex h-19 w-27 min-w-27 items-center justify-center">
        <img
          src={item.img}
          alt={`${item.mark} logo`}
          loading="lazy"
          className="max-h-19 max-w-27 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    ) : (
      <div className={`flex h-16 w-27 min-w-27 items-center justify-center rounded-xl bg-current/6 px-2 text-center text-lg font-black leading-tight ${item.tone}`}>
        {item.mark}
      </div>
    )}
    <div className="ml-4 border-l border-heading/10 pl-4">
      <div className={`text-[15px] font-extrabold leading-tight ${item.tone}`}>{item.mark}</div>
      <div className="mt-1 text-[11px] font-semibold leading-snug text-muted">{item.label}</div>
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
              <img
                src="/certifications/lunghealth.webp"
                alt="LungHealth logo"
                loading="lazy"
                className="h-14 max-w-40 shrink-0 object-contain"
              />
              <div className="text-xs font-semibold text-muted">Clinical knowledge collaboration</div>
            </div>
            <div className="flex min-h-24 items-center gap-5 rounded-2xl bg-background px-6 py-5">
              <img
                src="/certifications/wolters-kluwer.webp"
                alt="Wolters Kluwer logo"
                loading="lazy"
                className="h-12 max-w-44 shrink-0 object-contain"
              />
              <div className="text-xs font-semibold text-muted">Healthcare information collaboration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustStandards
