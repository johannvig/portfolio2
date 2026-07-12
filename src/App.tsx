import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className={`noise relative text-white overflow-x-hidden ${page === 'home' ? 'min-h-screen' : 'min-h-screen bg-[#080808]'}`}>
      <CustomCursor />
      {page !== 'home' && <ParticleCanvas />}
      <Nav currentPage={page} onNavigate={navigate} />

      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'projects' && <Projects onNavigate={navigate} />}
    </div>
  );
}
