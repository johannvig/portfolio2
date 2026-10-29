import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

type ProjectsProps = {
  onNavigate: (page: string) => void;
};

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const { ref, visible } = useReveal();
  const accent = project.colors.darkshapecol;

  return (
    <section
      ref={ref}
      className={`opacity-0-init h-full ${visible ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => onOpen(project)}
        className="group relative h-full w-full text-left border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-500 backdrop-blur-sm bg-white/[0.02]"
      >
        {/* Accent glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: accent }}
        />

        <div className="relative p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: accent }}
              />
              <span className="text-xs font-display tracking-widest text-white/30 uppercase">
                {project.year}
              </span>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
            />
          </div>

          <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:tracking-tight transition-all duration-300">
            {project.name}
          </h3>

          <p className="text-white/40 text-sm mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.split(' / ').map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-white/40 border border-white/10 rounded-full px-2.5 py-1 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-white/30 text-xs mt-4 tracking-wide">{project.type}</p>
        </div>
      </button>
    </section>
  );
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref: gridRef, visible: gridVisible } = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10">
      {/* Hero */}
      <header className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        

        <h1
          className={`font-display font-bold leading-none tracking-tight opacity-0-init ${loaded ? 'animate-fade-up delay-300' : ''}`}
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          <span className="block text-white">My</span>
          <span className="block about-gradient-text">projects</span>
        </h1>

        <p className={`mt-8 max-w-2xl text-white/40 text-base md:text-lg font-light leading-relaxed opacity-0-init ${loaded ? 'animate-fade-up delay-400' : ''}`}>
          A selection of academic and personal projects, from web development to software,
          through the mobile and UX/UI design.
        </p>

        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0-init ${loaded ? 'animate-fade-in delay-900' : ''}`}>
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-display">Scroll</span>
          <div className="w-px h-12 overflow-hidden bg-white/10">
            <div className="w-full h-1/2 bg-white/50 scroll-line" />
          </div>
        </div>
      </header>

      {/* Grid */}
      <section
        ref={gridRef}
        className={`px-6 md:px-16 py-24 max-w-6xl mx-auto opacity-0-init ${gridVisible ? 'animate-fade-up' : ''}`}
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">01</span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">
            Achievements
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.urlName}
              project={project}
              index={idx}
              onOpen={setSelected}
            />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-32 text-center">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
          Let's work <span className="about-gradient-text">together</span>
        </h2>
        <p className="text-white/40 text-base mb-8 max-w-md mx-auto">
          An idea to develop ? Contact me.
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3.5 rounded-full font-display font-semibold text-sm tracking-wide hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:gap-3 shadow-lg shadow-cyan-500/20 z-10"
        >
          Back to home
          <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
        </button>
      </section>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
