import { motion } from 'framer-motion'

const NAV_LINKS = [
  { name: 'About', targetId: 'about' },
  { name: 'Education', targetId: 'education' },
  { name: 'Projects', targetId: 'projects' },
  { name: 'Open Source', targetId: 'open-source' },
]

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/anujsharma8d' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anujsharma8d/' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/AnujSharma8d/' },
]

export default function FooterSection() {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      id="footer"
      className="relative z-20 w-full bg-white text-[#141414] pt-16 sm:pt-24 lg:pt-28 pb-6 sm:pb-0 px-[4vw] sm:px-[6vw] flex flex-col justify-between border-t border-black/[0.08] select-none overflow-hidden scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between">
        {/* ── Top Row: Call To Action & Links Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 sm:pb-24 border-b border-black/[0.08]">
          {/* Left: Collab CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 text-emerald-800 font-mono text-xs font-semibold uppercase tracking-wider rounded-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
              <h3 className="font-hero text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[0.95]">
                Let's Build Something Extraordinary Together
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-lg leading-relaxed">
                Whether you have an ambitious product idea, need full-stack engineering expertise, or want to collaborate on open-source, my inbox is always open.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:anujsharma8d@gmail.com"
                className="inline-flex items-center overflow-hidden border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-300 group rounded-none"
              >
                <span className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-100 text-neutral-900 group-hover:bg-neutral-200 transition-colors border-l-4 border-[#900610]">
                  Get In Touch
                </span>
                <span className="w-12 h-12 flex items-center justify-center bg-[#900610] text-white transition-transform duration-300 group-hover:scale-105 rounded-none">
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
              </a>
            </div>
          </div>

          {/* Right: Quick Links, Socials & Info */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-0">
            {/* Column 1: Navigation */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                Navigation
              </span>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <button
                      type="button"
                      onClick={() => handleScrollTo(link.targetId)}
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#900610] transition-colors cursor-pointer border-none bg-transparent p-0"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                Connect
              </span>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#900610] transition-colors inline-flex items-center gap-1.5 no-underline"
                    >
                      <span>{social.name}</span>
                      <span className="text-[10px] text-neutral-400">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Location */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                Location
              </span>
              <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                <p className="m-0 font-medium">Jalandhar, India</p>
                <p className="m-0 text-neutral-500 text-xs">Dr B R Ambedkar National Institute of Technology Jalandhar</p>
                <p className="m-0 text-neutral-500 text-xs">Data Science Engineering'29</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Monumental Name: Anuj Sharma with Blurry Fade Hiding Bottom Half ── */}
        <div className="relative w-full pt-10 sm:pt-16 lg:pt-20 pb-0 flex justify-center items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full select-none text-center px-2 sm:px-4"
          >
            <h2
              className="m-0 w-full text-center font-google-sans text-[clamp(2.1rem,11.5vw,18.5rem)] font-medium tracking-tight leading-[0.88] text-[#121317] whitespace-nowrap select-none"
              style={{
                fontFamily: "'Google Sans', 'Product Sans', -apple-system, sans-serif",
              }}
            >
              Anuj Sharma
            </h2>

            {/* Blurry Effect Covering & Hiding Bottom Half */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-[42%] sm:h-[48%] md:h-[52%] pointer-events-none select-none z-10 backdrop-blur-[5px] sm:backdrop-blur-[10px] md:backdrop-blur-[14px] bg-gradient-to-t from-white via-white/80 to-transparent"
              style={{
                WebkitMaskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
                maskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
