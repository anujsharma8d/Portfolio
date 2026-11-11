import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  tagline: string
  githubUrl: string
  liveUrl?: string
  status?: string
  tags: string[]
  imageSrc: string
  imageAlt: string
  aspectRatio: string
}

const PROJECTS: Project[] = [
  {
    id: 'mockspire',
    title: '1. MOCKSPIRE',
    tagline: 'INTELLIGENT AI-POWERED INTERVIEW SIMULATION PLATFORM POWERED BY GOOGLE GEMINI. OPEN SOURCE & ACTIVELY REVIEWING COMMUNITY PRS.',
    githubUrl: 'https://github.com/anujsharma8d/mockspire',
    liveUrl: 'https://mockspire.vercel.app/',
    status: 'OPEN SOURCE · ACCEPTING PRS',
    tags: [
      'Open Source',
      'Community PR Reviews',
      'Google Gemini API',
      'React 18',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Tailwind CSS',
      'Speech-to-Text',
      'JWT Auth',
      'Real-Time Scoring',
    ],
    imageSrc: '/mockspire_dashboard.jpg',
    imageAlt: 'Mockspire AI Mock Interview Platform Dashboard',
    aspectRatio: 'aspect-[1024/526]',
  },
  {
    id: 'mobile-transformer',
    title: '2. MOBILE TRANSFORMER',
    tagline: 'DISTRIBUTED TRANSFORMER INFERENCE ACROSS MULTIPLE MOBILE PHONES USING BROWSER-BASED CPUS, ENABLING COLLABORATIVE AI EXECUTION WITHOUT GPUS.',
    githubUrl: 'https://github.com/anujsharma8d/MobileTransformer',
    status: 'IN PROGRESS',
    tags: [
      'Distributed Inference',
      'Transformer AI',
      'WebAssembly (WASM)',
      'Browser CPU Sharding',
      'Web Workers',
      'Peer-to-Peer Mesh',
      'TypeScript',
      'Zero-GPU Execution',
    ],
    imageSrc: '/mobiletransformer_github.png',
    imageAlt: 'MobileTransformer GitHub Repository - Distributed Inference Across Mobile CPUs',
    aspectRatio: 'aspect-[1024/523]',
  },
]

export default function ProjectsSection() {
  const [projHovered, setProjHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleProjMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  // Dynamic scroll listener that detects when each stacked card reaches viewport focus
  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.45
      let active = 0
      cardRefs.current.forEach((el, idx) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerY) {
          active = idx
        }
      })
      setActiveIndex(active)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="projects"
      className="relative z-20 w-full bg-white text-[#141414] pt-16 sm:pt-24 pb-12 sm:pb-16 px-[4vw] sm:px-[6vw] flex flex-col justify-start border-t border-black/[0.08] scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 mb-10 sm:mb-12">
        {/* ── Top Header Row: Giant Heading & GitHub Link ── */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          {/* Giant PROJECTS Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setProjHovered(true)}
            onMouseMove={handleProjMouseMove}
            onMouseLeave={() => setProjHovered(false)}
            className="relative pointer-events-auto cursor-default text-left select-none"
          >
            {/* Base Layer: PROJECTS in watermark grey */}
            <h2
              className="m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(4.2rem,10.5vw,13rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left"
              style={{
                WebkitMaskImage: projHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
                maskImage: projHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
              }}
            >
              <span className="block text-black/[0.28]">PROJECTS</span>
            </h2>

            {/* Overlay Layer: Under spotlight circle, PROJECTS turns signature red */}
            <h2
              aria-hidden="true"
              className="absolute inset-0 m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(4.2rem,10.5vw,13rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left pointer-events-none"
              style={{
                WebkitMaskImage: projHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                maskImage: projHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                opacity: projHovered ? 1 : 0,
              }}
            >
              <span className="block text-[#900610]">PROJECTS</span>
            </h2>
          </motion.div>

          {/* Right Header Capsule: View GitHub */}
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
              <span>View All Repositories</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h6V3H3v18h18v-8h-2v6H5V5z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Stacking Cards Deck (Replicating Reference Video Animation) ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-0">
        {PROJECTS.map((project, idx) => {
          const isActive = activeIndex === idx

          return (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[idx] = el
              }}
              className={`sticky top-20 md:top-24 w-full bg-white border border-neutral-300 shadow-[0_-12px_36px_rgba(0,0,0,0.06)] rounded-none p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ${
                idx === PROJECTS.length - 1 ? 'mb-0' : 'mb-16 sm:mb-20 md:mb-28'
              }`}
              style={{
                zIndex: 10 + idx,
              }}
            >
              {/* Card Main Grid (2-column editorial Framer layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* ── Left Column: Number + Giant Title, Visual Preview ── */}
                <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
                  <div>
                    {/* Optional Status Pill (without random icons) */}
                    {project.status && (
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-none border ${
                            project.id === 'mockspire'
                              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-800'
                              : 'bg-amber-500/10 border-amber-500/40 text-amber-800'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    )}

                    {/* Project Heading: 1. MOCKSPIRE / 2. MOBILE TRANSFORMER */}
                    <h3
                      className={`font-hero text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] tracking-tight uppercase leading-[0.95] transition-colors duration-500 ${
                        isActive ? 'text-[#900610]' : 'text-neutral-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Visual Preview Box (Pure Rectangle) */}
                  <div className="relative w-full overflow-hidden border border-neutral-300 shadow-md bg-white rounded-none">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative w-full ${project.aspectRatio} overflow-hidden bg-white group rounded-none block cursor-pointer`}
                      title={project.liveUrl ? 'Open live platform' : 'View on GitHub'}
                    >
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="w-full h-full object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      />
                    </a>
                  </div>
                </div>

                {/* ── Right Column: Uppercase Statement, Action Button, Capability Tags ── */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-8 lg:pt-2">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {project.status && (
                        <div
                          className={`inline-block px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider rounded-none border ${
                            project.id === 'mockspire'
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                              : 'bg-amber-50 border-amber-300 text-amber-800'
                          }`}
                        >
                          {project.id === 'mockspire'
                            ? 'Open Source · Actively Reviewing Pull Requests'
                            : 'Currently Building'}
                        </div>
                      )}
                      <p className="font-bold uppercase tracking-tight text-neutral-800 text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action Buttons: Live Platform + GitHub */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none"
                        >
                          <span
                            className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 border-l-4 ${
                              isActive
                                ? 'border-[#900610] bg-neutral-100 text-neutral-900 group-hover:bg-neutral-200'
                                : 'border-transparent bg-neutral-100 text-neutral-800 group-hover:bg-neutral-200'
                            }`}
                          >
                            LIVE PLATFORM
                          </span>
                          <span className="w-11 h-11 flex items-center justify-center bg-[#900610] text-white transition-transform duration-300 group-hover:scale-105 rounded-none">
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 17L17 7M17 7H7M17 7V17"
                              />
                            </svg>
                          </span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none"
                      >
                        <span className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 group-hover:bg-neutral-200 transition-colors border-l-4 border-neutral-400">
                          {project.liveUrl ? 'GITHUB CODE' : 'VIEW PROJECT'}
                        </span>
                        <span
                          className={`w-11 h-11 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 rounded-none ${
                            project.liveUrl ? 'bg-neutral-900' : 'bg-[#900610]'
                          }`}
                        >
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17L17 7M17 7H7M17 7V17"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Capabilities / Tech Stack Tags (Pure Rectangles) */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-4 sm:pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 border transition-colors shadow-2xs rounded-none ${
                          tag === 'Open Source' || tag === 'Community PR Reviews'
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold'
                            : tag === 'Zero-GPU Execution'
                            ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                            : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 border-neutral-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
