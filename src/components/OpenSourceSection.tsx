
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function OpenSourceSection() {
  const [osHovered, setOsHovered] = useState(false)

  const handleOsMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="open-source"
      className="relative z-20 w-full min-h-screen bg-white text-[#141414] py-20 sm:py-28 px-[4vw] sm:px-[6vw] flex flex-col justify-start border-t border-black/[0.08] scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">

        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setOsHovered(true)}
            onMouseMove={handleOsMouseMove}
            onMouseLeave={() => setOsHovered(false)}
            className="relative pointer-events-auto cursor-default text-left select-none"
          >
            <h2
              className="m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(3.8rem,9vw,11.5rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left"
              style={{
                WebkitMaskImage: osHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
                maskImage: osHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
              }}
            >
              <span className="block text-black/[0.28]">OPEN SOURCE</span>
            </h2>

            <h2
              aria-hidden="true"
              className="absolute inset-0 m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(3.8rem,9vw,11.5rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left pointer-events-none"
              style={{
                WebkitMaskImage: osHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                maskImage: osHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                opacity: osHovered ? 1 : 0,
              }}
            >
              <span className="block text-[#900610]">OPEN SOURCE</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center gap-3 self-start lg:self-end pb-2"
          >
            <a
              href="https://github.com/anujsharma8d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/[0.04] hover:bg-black/[0.08] border border-black/10 transition-colors font-sans text-xs font-bold tracking-wider uppercase text-black/80 no-underline rounded-none"
            >
              <span>View All Contributions</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h6V3H3v18h18v-8h-2v6H5V5z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

          <div className="p-6 bg-white border border-neutral-300 shadow-xs rounded-none flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              Global Impact
            </span>
            <div className="my-4">
              <div className="font-hero text-4xl sm:text-5xl font-black text-[#900610] tracking-normal">
                100+
              </div>
              <div className="font-bold text-sm sm:text-base text-neutral-900 uppercase mt-1">
                Merged Pull Requests
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              Contributions to open-source projects through feature additions, bug fixes, UI improvements, and performance optimizations.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-300 shadow-xs rounded-none flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              Lead Project
            </span>
            <div className="my-4">
              <div className="font-hero text-4xl sm:text-5xl font-black text-[#900610] tracking-normal">
                Mockspire
              </div>
              <div className="font-bold text-sm sm:text-base text-neutral-900 uppercase mt-1">
                Creator & Maintainer
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              Building and maintaining an open-source AI interview platform while welcoming contributions from developers.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-300 shadow-xs rounded-none flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              Ecosystem
            </span>
            <div className="my-4">
              <div className="font-hero text-4xl sm:text-5xl font-black text-[#900610] tracking-tight">
                Community
              </div>
              <div className="font-bold text-sm sm:text-base text-neutral-900 uppercase mt-1">
                Collaboration & Contributions
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              Collaborating with developers through open-source contributions, project discussions, and shared improvements.
            </p>
          </div>

        </div>

        {/* Featured Open Source Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Mockspire */}
          <div className="lg:col-span-7 bg-white border border-neutral-300 shadow-xs p-6 sm:p-8 md:p-10 rounded-none flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider rounded-none">
                  CREATOR & MAINTAINER
                </span>
              </div>

              <h3 className="font-hero text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[0.95]">
                Mockspire Open Source Ecosystem
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
                Mockspire is an open-source AI interview preparation platform that I built and maintain. It helps candidates practice interviews through AI-driven questions, personalized feedback, and performance analysis. I welcome developers to contribute new features and improvements.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium font-sans">
                  <span className="text-[#900610] font-bold">—</span>
                  <span>Developing and maintaining full-stack features and application architecture.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium font-sans">
                  <span className="text-[#900610] font-bold">—</span>
                  <span>Building AI-powered interview flows and improving the user experience.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium font-sans">
                  <span className="text-[#900610] font-bold">—</span>
                  <span>Maintaining contribution guidelines and welcoming community contributions.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200">
              <a
                href="https://github.com/anujsharma8d/mockspire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none"
              >
                <span className="px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-100 text-neutral-900 group-hover:bg-neutral-200 transition-colors border-l-4 border-[#900610]">
                  CONTRIBUTE ON GITHUB
                </span>
                <span className="w-10 h-10 flex items-center justify-center bg-[#900610] text-white transition-transform duration-300 group-hover:scale-105 rounded-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>

              <a
                href="https://github.com/anujsharma8d/mockspire/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 bg-white hover:bg-neutral-50 border border-neutral-300 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 transition-colors rounded-none"
              >
                VIEW OPEN ISSUES ↗
              </a>
            </div>
          </div>

          {/* Community Contributions */}
          <div className="lg:col-span-5 bg-white border border-neutral-300 shadow-xs p-6 sm:p-8 md:p-10 rounded-none flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-bold uppercase tracking-wider rounded-none">
                  COMMUNITY CONTRIBUTIONS
                </span>
              </div>

              <h3 className="font-hero text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[0.95]">
                Global Open Repositories
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
                Actively contributing to open-source repositories and developer projects across the web ecosystem through frontend improvements, bug fixes, feature additions, and performance enhancements.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium font-sans">
                  <span className="text-[#900610] font-bold">—</span>
                  <span>100+ merged pull requests across open-source projects.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium font-sans">
                  <span className="text-[#900610] font-bold">—</span>
                  <span>Contributing to frontend features, UI improvements, and bug fixes.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium font-sans">
                  <span className="text-[#900610] font-bold">—</span>
                  <span>Optimizing frontend components, state management, and developer workflows.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <a
                href="https://github.com/anujsharma8d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none"
              >
                <span className="px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-100 text-neutral-900 group-hover:bg-neutral-200 transition-colors border-l-4 border-neutral-400">
                  EXPLORE GITHUB ACTIVITY
                </span>
                <span className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-white transition-transform duration-300 group-hover:scale-105 rounded-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
