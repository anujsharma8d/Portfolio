import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EducationSection() {
  const [eduHovered, setEduHovered] = useState(false)

  const handleEduMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="education"
      className="relative z-20 w-full min-h-screen bg-white text-[#141414] py-20 sm:py-28 px-[6vw] flex flex-col justify-start overflow-hidden border-t border-black/[0.08] scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* ── Giant EDUCATION Heading positioned at the Top Left ── */}
        <div className="w-full flex justify-start items-start select-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setEduHovered(true)}
            onMouseMove={handleEduMouseMove}
            onMouseLeave={() => setEduHovered(false)}
            className="relative pointer-events-auto cursor-default text-left select-none"
          >
            {/* Base Layer: EDUCATION in watermark grey */}
            <h2
              className="m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(4.2rem,10.5vw,13rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left"
              style={{
                WebkitMaskImage: eduHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
                maskImage: eduHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
              }}
            >
              <span className="block text-black/[0.28]">EDUCATION</span>
            </h2>

            {/* Overlay Layer: Under spotlight circle, EDUCATION turns signature red */}
            <h2
              aria-hidden="true"
              className="absolute inset-0 m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(4.2rem,10.5vw,13rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left pointer-events-none"
              style={{
                WebkitMaskImage: eduHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                maskImage: eduHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                opacity: eduHovered ? 1 : 0,
              }}
            >
              <span className="block text-[#900610]">EDUCATION</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Two-Column Layout: Photo on Left, Details on Right ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── Left Column: Centered College Campus Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-[#fafafa]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/nitj_campus.jpg"
                alt="Dr B R Ambedkar National Institute of Technology Jalandhar Campus"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              
            </div>
          </motion.div>

          {/* ── Right Column: College Details ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6 text-[#141414]"
          >
            {/* College Name */}
            <div>
              <h3 className="font-hero text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.03em] uppercase text-[#141414] leading-[1.05] m-0">
                Dr B R Ambedkar National Institute of Technology Jalandhar
              </h3>
              <p className="font-sans text-sm sm:text-base text-black/60 mt-1.5 mb-0 font-medium tracking-wide">
                Jalandhar, Punjab, India
              </p>
            </div>

            {/* Degree Badge & Batch */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#900610] text-white font-sans text-xs font-bold tracking-wider uppercase">
                B.Tech · Data Science Engineering
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 font-sans text-xs font-bold tracking-wider text-black/75 uppercase">
                2025 — 2029
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-[clamp(1rem,1.15vw,1.15rem)] leading-[1.7] text-black/75 m-0 font-normal">
              Pursuing Bachelor of Technology in <strong className="font-semibold text-black">Data Science Engineering</strong> at NIT Jalandhar. Combining rigorous mathematical, statistical, and algorithmic foundations with modern high-scale software engineering, applied AI, and real-world system design.
            </p>

            {/* Coursework & Technical Domains */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-black/10">
              <span className="font-sans text-[0.7rem] font-bold tracking-[0.18em] text-black/50 uppercase">
                Core Domains & Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Machine Learning & AI',
                  'Database Management Systems',
                  'Object-Oriented Programming (C++)',
                  'Full-Stack Web Engineering',
                  'Operating Systems & Networks',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#fafafa] border border-black/10 text-xs font-sans font-semibold text-black/80 hover:border-black/25 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
