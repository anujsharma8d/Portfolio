import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import OpenSourceSection from './components/OpenSourceSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <main className="relative w-full overflow-x-clip">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <OpenSourceSection />
      <FooterSection />
    </main>
  )
}

export default App
