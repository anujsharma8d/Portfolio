import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LEFT_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/anujsharma8d',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anujsharma8d/',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/AnujSharma8d/',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
]

const RIGHT_LINKS = [
  { name: 'About', targetId: 'about' },
  { name: 'Education', targetId: 'education' },
  { name: 'Projects', targetId: 'projects' },
  { name: 'Open Source', targetId: 'open-source' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="fixed top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-50 pointer-events-none flex justify-between items-center select-none">
        {/* ── Left Capsule: Social Links with Icons & Dot Separators ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="pointer-events-auto backdrop-blur-xl bg-black/45 hover:bg-black/55 border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full flex items-center transition-all duration-300 py-2.5 sm:py-3.5 lg:py-5 px-3.5 sm:px-6 lg:px-9 gap-3 sm:gap-5 lg:gap-7"
        >
          {LEFT_LINKS.map((link, idx) => (
            <div
              key={link.name}
              className="flex items-center gap-3 sm:gap-5 lg:gap-7"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-white/70 hover:text-white transition-colors font-sans text-[0.7rem] sm:text-[0.74rem] lg:text-[0.78rem] font-bold tracking-[0.16em] lg:tracking-[0.22em] uppercase no-underline leading-none gap-1.5 sm:gap-2"
                title={link.name}
              >
                <span className="text-white/80 group-hover:text-white transition-colors shrink-0">
                  {link.icon}
                </span>
                <span className="hidden sm:inline">{link.name}</span>
              </a>
              {idx < LEFT_LINKS.length - 1 && (
                <span
                  className="text-white/30 select-none font-light leading-none text-[10px] sm:text-[11px]"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Right Capsule (Desktop & Tablet): Navigation Links ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="hidden md:flex pointer-events-auto backdrop-blur-xl bg-black/45 hover:bg-black/55 border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full items-center transition-all duration-300 py-2.5 sm:py-3.5 lg:py-5 px-4 sm:px-6 lg:px-9 gap-3.5 sm:gap-5 lg:gap-7"
        >
          {RIGHT_LINKS.map((link, idx) => (
            <div
              key={link.name}
              className="flex items-center gap-3.5 sm:gap-5 lg:gap-7"
            >
              <button
                type="button"
                onClick={() => handleScroll(link.targetId)}
                className="text-white/70 hover:text-white transition-colors font-sans text-[0.7rem] sm:text-[0.74rem] lg:text-[0.78rem] font-bold tracking-[0.16em] lg:tracking-[0.22em] uppercase cursor-pointer border-none bg-transparent p-0 leading-none whitespace-nowrap"
              >
                {link.name}
              </button>
              {idx < RIGHT_LINKS.length - 1 && (
                <span
                  className="text-white/30 select-none font-light leading-none text-[10px] sm:text-[11px]"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Right Capsule (Mobile Hamburger Button) ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="md:hidden pointer-events-auto"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="backdrop-blur-xl bg-black/55 active:bg-black/75 border border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer transition-all"
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </motion.div>
      </header>

      {/* ── Mobile Menu Dropdown Modal ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-18 z-50 md:hidden pointer-events-auto select-none"
          >
            <div className="backdrop-blur-2xl bg-black/90 border border-white/[0.16] shadow-[0_16px_48px_rgba(0,0,0,0.85)] rounded-2xl p-6 flex flex-col gap-6">
              {/* Navigation Items */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                  Navigation
                </span>
                {RIGHT_LINKS.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleScroll(link.targetId)}
                    className="flex items-center justify-between py-2.5 text-left font-hero text-xl font-bold tracking-tight uppercase text-white/90 hover:text-[#900610] active:text-[#900610] transition-colors border-b border-white/[0.08] bg-transparent cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <span className="text-white/40 text-sm">→</span>
                  </button>
                ))}
              </div>

              {/* Social Profiles */}
              <div className="flex flex-col gap-2.5 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                  Connect
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {LEFT_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 rounded-lg text-xs font-sans font-bold tracking-wider uppercase text-white/90 transition-colors no-underline"
                    >
                      <span>{social.icon}</span>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
