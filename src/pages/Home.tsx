import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import ProjectModal from '../components/ProjectModal';
import { projects, type Project } from '../data/projects';

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplayed(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

type HomeProps = {
  onNavigate: (page: string) => void;
};

const SECTION_HEIGHT = 1.2;

export default function Home({ onNavigate }: HomeProps) {
  const roles = ['UI/UX Design', 'Creative', 'Developer', 'Innovative'];
  const role = useTypewriter(roles);
  const [loaded, setLoaded] = useState(false);
  const [sphereScroll, setSphereScroll] = useState(0);
  const [activeProject, setActiveProject] = useState(-1);
  const [projectProgress, setProjectProgress] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const projectsStart = vh;
      const sectionPx = SECTION_HEIGHT * vh;

      setSphereScroll(Math.min(scrollY / vh, 1));

      if (scrollY < projectsStart) {
        setActiveProject(-1);
        setProjectProgress(0);
        return;
      }

      const offsetInProjects = scrollY - projectsStart;
      const rawIdx = offsetInProjects / sectionPx;
      const idx = Math.floor(rawIdx);
      const frac = rawIdx - idx;

      if (idx >= projects.length) {
        setActiveProject(-1);
        setProjectProgress(0);
      } else {
        setActiveProject(idx);
        setProjectProgress(frac);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardOpacity = (p: number) => {
    if (p < 0.2) return p / 0.2;
    if (p > 0.8) return 1 - (p - 0.8) / 0.2;
    return 1;
  };

  const getCardTranslateY = (p: number) => {
    if (p < 0.2) return (1 - p / 0.2) * 60;
    if (p > 0.8) return -((p - 0.8) / 0.2) * 60;
    return 0;
  };

  const totalScrollHeight = `${100 + projects.length * SECTION_HEIGHT * 100 + 100}vh`;
  const projectsScrollSpace = `${projects.length * SECTION_HEIGHT * 100}vh`;
  const proj = activeProject >= 0 ? projects[activeProject] : null;

  return (
    <>
      <ThreeBackground scrollProgress={sphereScroll} />

      <div style={{ height: totalScrollHeight }} ref={scrollContainerRef}>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 text-center z-10 pointer-events-none"
          style={{ pointerEvents: activeProject >= 0 ? 'none' : undefined }}
        >
          <div className={`opacity-0-init ${loaded ? 'animate-fade-up delay-200' : ''} mb-8 pointer-events-auto`}>
            <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white/50 tracking-widest uppercase backdrop-blur-sm bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Looking for a 3 to 4-month internship this summer
            </span>
          </div>

          <h1
            className={`font-display font-bold leading-none tracking-tight opacity-0-init ${loaded ? 'animate-fade-up delay-300' : ''}`}
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
          >
            <span className="block text-white">Johanne</span>
            <span className="block gradient-text">Vigouroux</span>
          </h1>

          <div className={`mt-6 mb-10 opacity-0-init ${loaded ? 'animate-fade-up delay-400' : ''}`}>
            <p className="font-display text-lg md:text-xl font-light text-white/40 tracking-[0.3em] uppercase">
              {role}
              <span className="blink text-white/60 ml-0.5">|</span>
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row items-center gap-4 opacity-0-init pointer-events-auto ${loaded ? 'animate-fade-up delay-500' : ''}`}>
            <button
              onClick={() => onNavigate('projects')}
              className="group flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-display font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-300 hover:gap-3"
            >
              See my projects
              <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>

          <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0-init ${loaded ? 'animate-fade-in delay-900' : ''}`}
            style={{ opacity: Math.max(0, 1 - sphereScroll * 3) }}
          >
            <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-display">Scroll</span>
            <div className="w-px h-12 overflow-hidden bg-white/10">
              <div className="w-full h-1/2 bg-white/50 scroll-line" />
            </div>
          </div>
        </div>

        {/* ── PROJECT CINEMATIC ZONE ────────────────────────────────── */}

        {/* Side progress dots */}
        {proj && (
          <div
            className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2"
            style={{ opacity: getCardOpacity(projectProgress) }}
          >
            {projects.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i === activeProject ? 'white' : 'rgba(255,255,255,0.2)',
                  transform: i === activeProject ? 'scale(1.8)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {proj && (
          <div
            className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-1"
            style={{ opacity: getCardOpacity(projectProgress) * 0.5 }}
          >
            <span className="font-display text-xs text-white/30 tracking-widest">
              {String(activeProject + 1).padStart(2, '0')}
            </span>
            <div className="w-px h-8 bg-white/10" />
            <span className="font-display text-xs text-white/20 tracking-widest">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Floating project card — styled like ProjectCard */}
        {proj && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center"
            style={{
              opacity: getCardOpacity(projectProgress),
              transform: `translateY(${getCardTranslateY(projectProgress)}px)`,
              transition: 'transform 0.05s linear',
              pointerEvents: 'none',
            }}
          >
            <button
              className="group relative w-full text-left border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-500 backdrop-blur-sm bg-black/60"
              style={{ maxWidth: 420, width: '90vw', pointerEvents: 'auto', cursor: 'pointer' }}
              onClick={() => setOpenProject(proj)}
            >
              {/* Accent glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: proj.colors.darkshapecol }}
              />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: proj.colors.darkshapecol }} />
                    <span className="text-xs font-display tracking-widest text-white/30 uppercase">
                      {proj.year}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                  />
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:tracking-tight transition-all duration-300">
                  {proj.name}
                </h3>

                <p className="text-white/40 text-sm mb-4 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.technologies.split(' / ').map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-white/40 border border-white/10 rounded-full px-2.5 py-1 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-white/30 text-xs mt-4 tracking-wide">{proj.type}</p>
              </div>
            </button>
          </div>
        )}

        <div aria-hidden="true" style={{ height: projectsScrollSpace }} />

        {/* ── END OF SCROLL ────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/10" />
            <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-display">
              {projects.length} / {projects.length}
            </span>
            <div className="h-px w-16 bg-white/10" />
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="group inline-flex items-center gap-2 border border-white/15 text-white/50 px-7 py-3 rounded-full font-display font-medium text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            See all my projects
            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Full project modal */}
      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </>
  );
}
