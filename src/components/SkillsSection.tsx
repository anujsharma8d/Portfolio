const ROW_1 = [
  { name: 'REACT', icon: '/icons/react.svg' },
  { name: 'TYPESCRIPT', icon: '/icons/typescript.svg' },
  { name: 'TAILWIND CSS', icon: '/icons/tailwind_css.svg' },
  { name: 'JAVASCRIPT', icon: '/icons/javascript.svg' },
  { name: 'HTML5 / CSS3', icon: '/icons/html5___css3.svg' },
  { name: 'VITE', icon: '/icons/vite.svg' },
  { name: 'FRAMER MOTION', icon: '/icons/framer_motion.svg' },
]

const ROW_2 = [
  { name: 'NODE.JS', icon: '/icons/node_js.svg' },
  { name: 'PYTHON', icon: '/icons/python.svg' },
  { name: 'EXPRESS', icon: '/icons/express.svg' },
  { name: 'MONGODB', icon: '/icons/mongodb.svg' },
  { name: 'REST APIS', icon: '/icons/rest_apis.svg' },
]

const ROW_3 = [
  { name: 'GIT / GITHUB', icon: '/icons/git___github.svg' },
  { name: 'C++', icon: '/icons/cplusplus.svg' },
  { name: 'C', icon: '/icons/c.svg' },
  { name: 'POSTMAN', icon: '/icons/postman.svg' },
  { name: 'GEMINI API', icon: '/icons/gemini.svg' },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-20 w-full bg-white border-b border-black/[0.08] select-none overflow-hidden scroll-mt-24"
      style={{ paddingTop: '110px', paddingBottom: '32px' }}
    >
      <div className="w-full flex items-center">
        {/* ── Left Side: SKILLS Heading sized identical to SOFTWARE DEVELOPMENT ENGINEER ── */}
        <div className="shrink-0 pl-6 sm:pl-10 md:pl-16 pr-6 sm:pr-8 md:pr-12 border-r border-black/10 flex flex-col justify-center items-start z-10 bg-white">
          <h2 className="font-hero text-[clamp(2.4rem,7.5vw,9.6rem)] font-black tracking-[-0.05em] uppercase text-[#141414] leading-[0.85] whitespace-nowrap m-0">
            SKILL<span className="text-[#900610]">S</span>
          </h2>
        </div>

        {/* ── Right Side: 3 Alternating Marquees with Real Official Brand Logos ── */}
        <div className="flex-1 overflow-hidden flex flex-col justify-center gap-3.5 sm:gap-4 relative [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          {/* Row 1: Moving RIGHT */}
          <div className="overflow-hidden w-full flex items-center">
            <div className="animate-marquee-reverse flex items-center whitespace-nowrap py-1">
              {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((tech, idx) => (
                <div
                  key={`r1-${tech.name}-${idx}`}
                  className="group flex items-center gap-3 font-hero text-[clamp(1rem,1.25vw,1.35rem)] font-extrabold tracking-wider text-black/65 hover:text-black transition-colors cursor-default whitespace-nowrap mr-12 sm:mr-16 shrink-0"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-6 h-6 shrink-0 object-contain transition-transform duration-200 group-hover:scale-115"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving LEFT */}
          <div className="overflow-hidden w-full flex items-center">
            <div className="animate-marquee flex items-center whitespace-nowrap py-1">
              {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((tech, idx) => (
                <div
                  key={`r2-${tech.name}-${idx}`}
                  className="group flex items-center gap-3 font-hero text-[clamp(1rem,1.25vw,1.35rem)] font-extrabold tracking-wider text-black/65 hover:text-[#900610] transition-colors cursor-default whitespace-nowrap mr-12 sm:mr-16 shrink-0"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-6 h-6 shrink-0 object-contain transition-transform duration-200 group-hover:scale-115"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Moving RIGHT */}
          <div className="overflow-hidden w-full flex items-center">
            <div className="animate-marquee-reverse flex items-center whitespace-nowrap py-1">
              {[...ROW_3, ...ROW_3, ...ROW_3, ...ROW_3].map((tech, idx) => (
                <div
                  key={`r3-${tech.name}-${idx}`}
                  className="group flex items-center gap-3 font-hero text-[clamp(1rem,1.25vw,1.35rem)] font-extrabold tracking-wider text-black/65 hover:text-black transition-colors cursor-default whitespace-nowrap mr-12 sm:mr-16 shrink-0"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-6 h-6 shrink-0 object-contain transition-transform duration-200 group-hover:scale-115"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
