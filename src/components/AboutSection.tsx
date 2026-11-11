import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const [aboutHovered, setAboutHovered] = useState(false)

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAboutMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="about"
      className="relative z-20 w-full min-h-screen bg-white text-[#141414] py-24 sm:py-32 px-[6vw] flex items-center justify-center overflow-hidden border-b border-black/[0.08] scroll-mt-24"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── Left Column: Bio Content ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6 text-[#141414] border-b lg:border-b-0 lg:border-r border-black/10 pb-10 lg:pb-4 lg:pr-14"
        >
          <h3 className="font-hero text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] uppercase text-[#141414] leading-tight m-0">
            Anuj Sharma
          </h3>

          <p className="font-sans text-[clamp(1.02rem,1.2vw,1.22rem)] leading-[1.75] text-black/75 m-0 font-normal">
            I'm a second-year Data Science undergraduate at <strong className="font-semibold text-black">Dr B R Ambedkar National Institute of Technology Jalandhar</strong> with a passion for building modern, interactive, and user-focused web applications. I primarily work with <strong className="font-semibold text-black">React</strong>, <strong className="font-semibold text-black">JavaScript</strong>, <strong className="font-semibold text-black">TypeScript</strong>, and <strong className="font-semibold text-black">Tailwind CSS</strong>, while also exploring backend development with <strong className="font-semibold text-black">Node.js</strong>, <strong className="font-semibold text-black">Express</strong>, and <strong className="font-semibold text-black">MongoDB</strong>.
          </p>

          <p className="font-sans text-[clamp(1.02rem,1.2vw,1.22rem)] leading-[1.75] text-black/75 m-0 font-normal">
            I enjoy turning ideas into real-world products, solving challenging DSA problems, and contributing to open-source projects. With <span className="font-semibold text-[#900610]">100+ merged pull requests</span> and <span className="font-semibold text-[#900610]">600+ DSA problems solved</span>, I continuously push myself to learn, build, and improve.
          </p>

          <p className="font-sans text-[clamp(1.02rem,1.2vw,1.22rem)] leading-[1.75] text-black/75 m-0 font-normal">
            Currently, I'm exploring AI integrations and backend technologies to build smarter, more impactful applications. I believe in learning by building and creating things that make a difference.
          </p>

          {/* Action Buttons: View Projects + Open Source */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <button
              type="button"
              onClick={() => handleScroll('projects')}
              className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none cursor-pointer bg-transparent p-0"
            >
              <span className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-100 text-neutral-900 group-hover:bg-neutral-200 transition-colors border-l-4 border-[#900610]">
                VIEW PROJECTS
              </span>
              <span className="w-11 h-11 flex items-center justify-center bg-[#900610] text-white transition-transform duration-300 group-hover:scale-105 rounded-none">
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('open-source')}
              className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none cursor-pointer bg-transparent p-0"
            >
              <span className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 group-hover:bg-neutral-200 transition-colors border-l-4 border-neutral-400">
                OPEN SOURCE
              </span>
              <span className="w-11 h-11 flex items-center justify-center bg-neutral-900 text-white transition-transform duration-300 group-hover:scale-105 rounded-none">
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── Right Column: Large ABOUT ME Heading with Spotlight Hover ── */}
        <div className="lg:col-span-6 flex justify-start lg:justify-end select-none lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setAboutHovered(true)}
            onMouseMove={handleAboutMouseMove}
            onMouseLeave={() => setAboutHovered(false)}
            className="relative pointer-events-auto cursor-default text-left select-none"
          >
            {/* Base Layer: ABOUT is grey, ME is red */}
            <h2
              className="m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(4.2rem,10.5vw,13rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left"
              style={{
                WebkitMaskImage: aboutHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
                maskImage: aboutHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                  : 'none',
              }}
            >
              <span className="block text-black/[0.28]">ABOUT</span>
              <span className="block text-[#900610]">ME</span>
            </h2>

            {/* Overlay Layer: Under circle spotlight, ABOUT flips to red, ME flips to grey */}
            <h2
              aria-hidden="true"
              className="absolute inset-0 m-0 pt-[0.14em] pb-[0.06em] px-[0.06em] font-hero text-[clamp(4.2rem,10.5vw,13rem)] font-black leading-[0.85] tracking-[-0.05em] uppercase text-left pointer-events-none"
              style={{
                WebkitMaskImage: aboutHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                maskImage: aboutHovered
                  ? 'radial-gradient(circle clamp(45px, 4vw, 65px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                  : 'none',
                opacity: aboutHovered ? 1 : 0,
              }}
            >
              <span className="block text-[#900610]">ABOUT</span>
              <span className="block text-black/[0.28]">ME</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
