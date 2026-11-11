import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Silky, luxury easing with a smooth, slow deceleration curve
const smoothSlowEase = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [sdeHovered, setSdeHovered] = useState(false)
  const [nameHovered, setNameHovered] = useState(false)

  // Interactive subtle parallax on mouse movement
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 2
      const yPct = (e.clientY / window.innerHeight - 0.5) * 2

      hero.style.setProperty('--mx', `${xPct}`)
      hero.style.setProperty('--my', `${yPct}`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSdeMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  const handleNameMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[78dvh] sm:h-[88dvh] lg:h-screen min-h-[500px] sm:min-h-[580px] overflow-hidden bg-[#161614] bg-[url('/hero_bg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col select-none"
    >
      {/* ── Background Giant Watermark Text (Step 1: Appears First) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden px-4 -translate-y-[14vh] sm:-translate-y-[12vh] lg:-translate-y-[14vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: smoothSlowEase, delay: 0.1 }}
          onMouseEnter={() => setSdeHovered(true)}
          onMouseMove={handleSdeMouseMove}
          onMouseLeave={() => setSdeHovered(false)}
          className="relative pointer-events-auto cursor-default flex flex-col items-center justify-center leading-none"
        >
          {/* Base Layer: White Watermark */}
          <div
            className="flex flex-col items-center justify-center leading-none"
            style={{
              WebkitMaskImage: sdeHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                : 'none',
              maskImage: sdeHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                : 'none',
            }}
          >
            <span className="inline-block font-hero text-[clamp(1.2rem,5.4vw,2.4rem)] lg:text-[clamp(2.4rem,7.5vw,9.6rem)] font-black tracking-[-0.05em] text-white/[0.28] uppercase whitespace-nowrap text-center">
              SOFTWARE DEVELOPMENT
            </span>
            <span className="inline-block font-hero text-[clamp(1.2rem,5.4vw,2.4rem)] lg:text-[clamp(2.4rem,7.5vw,9.6rem)] font-black tracking-[-0.05em] text-white/[0.28] uppercase whitespace-nowrap text-center mt-[0.6vw]">
              ENGINEER
            </span>
          </div>

          {/* Overlay Layer: Adopts the flat color of ANUJ SHARMA (#900610) within circle radius (no outline/ring, no shining) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col items-center justify-center leading-none pointer-events-none"
            style={{
              WebkitMaskImage: sdeHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                : 'none',
              maskImage: sdeHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                : 'none',
              opacity: sdeHovered ? 1 : 0,
            }}
          >
            <span className="inline-block font-hero text-[clamp(1.2rem,5.4vw,2.4rem)] lg:text-[clamp(2.4rem,7.5vw,9.6rem)] font-black tracking-[-0.05em] text-[#900610] uppercase whitespace-nowrap text-center">
              SOFTWARE DEVELOPMENT
            </span>
            <span className="inline-block font-hero text-[clamp(1.2rem,5.4vw,2.4rem)] lg:text-[clamp(2.4rem,7.5vw,9.6rem)] font-black tracking-[-0.05em] text-[#900610] uppercase whitespace-nowrap text-center mt-[0.6vw]">
              ENGINEER
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Foreground Person Cutout Layer (Step 2: Appears after 1 second) ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 38 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: smoothSlowEase, delay: 1.1 }}
        className="absolute inset-0 pointer-events-none z-[2]"
      >
        {/* Person Cutout (Crisp, responsive positioning: compact on mobile, majestic cover on desktop) */}
        <div className="absolute inset-0 bg-[url('/hero_person.png')] bg-no-repeat bg-[center_bottom] lg:bg-center bg-[length:auto_68%] sm:bg-[length:auto_76%] lg:bg-cover" />
      </motion.div>

      {/* ── Giant Name Spanning Full Horizontal Screen (Step 3: Appears Then) ── */}
      <div className="absolute left-0 right-0 w-full bottom-[1.8vh] sm:bottom-[2.5vh] lg:bottom-[2.5vh] z-[4] flex justify-center items-end pointer-events-none overflow-hidden px-2 sm:px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: smoothSlowEase, delay: 1.85 }}
          onMouseEnter={() => setNameHovered(true)}
          onMouseMove={handleNameMouseMove}
          onMouseLeave={() => setNameHovered(false)}
          className="relative pointer-events-auto cursor-default w-full flex justify-center items-center"
        >
          {/* Base Layer: Signature Red Color (cuts out under hover circle) */}
          <h1
            className="m-0 w-full lg:px-[1vw] text-center font-hero text-[clamp(2.15rem,11.5vw,4rem)] lg:text-[clamp(4rem,15vw,19.8rem)] font-black tracking-[-0.05em] text-[#900610] leading-[0.85] uppercase whitespace-nowrap select-none"
            style={{
              WebkitMaskImage: nameHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                : 'none',
              maskImage: nameHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), transparent 99%, black 100%)'
                : 'none',
            }}
          >
            ANUJ SHARMA
          </h1>

          {/* Overlay Layer: Adopts the exact solid opaque color of SOFTWARE DEVELOPMENT ENGINEER (#575755) so letters remain fully visible across the T-shirt */}
          <h1
            aria-hidden="true"
            className="absolute inset-0 m-0 w-full lg:px-[1vw] text-center font-hero text-[clamp(2.15rem,11.5vw,4rem)] lg:text-[clamp(4rem,15vw,19.8rem)] font-black tracking-[-0.05em] text-[#575755] leading-[0.85] uppercase whitespace-nowrap select-none pointer-events-none"
            style={{
              WebkitMaskImage: nameHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                : 'none',
              maskImage: nameHovered
                ? 'radial-gradient(circle clamp(42px, 3.5vw, 58px) at var(--spot-x, -999px) var(--spot-y, -999px), black 99%, transparent 100%)'
                : 'none',
              opacity: nameHovered ? 1 : 0,
            }}
          >
            ANUJ SHARMA
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
