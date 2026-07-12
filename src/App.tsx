import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import { projects } from './data/projects';

export default function App() {
  const [page, setPage] = useState('home');
  const currentPage = page.startsWith('case-study') ? 'projects' : page;
  const caseStudyProject = page.startsWith('case-study-')
    ? projects.find((project) => project.caseStudyPage === page)
    : null;

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className={`noise relative text-white overflow-x-hidden ${page === 'home' ? 'min-h-screen' : 'min-h-screen bg-[#080808]'}`}>
      <CustomCursor />
      {page !== 'home' && <ParticleCanvas />}
      <Nav currentPage={currentPage} onNavigate={navigate} />

      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'projects' && <Projects onNavigate={navigate} />}
      {caseStudyProject && <CaseStudy project={caseStudyProject} onNavigate={navigate} />}
    </div>
  );
}
