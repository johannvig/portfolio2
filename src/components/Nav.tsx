import { Github, Mail } from 'lucide-react';

type NavProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

export default function Nav({ currentPage, onNavigate }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
      <button
        onClick={() => onNavigate('home')}
        className="font-display font-semibold text-sm tracking-[0.2em] text-white/60 hover:text-white uppercase transition-colors duration-300"
      >
        JV
      </button>
      <div className="flex items-center gap-8 md:gap-12">
        {['Who am I ?', 'Project'].map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item === 'Who am I ?' ? 'about' : 'projects')}
            className={`nav-link font-display text-sm font-medium tracking-wide transition-colors duration-300 ${
              currentPage === (item === 'Who am I ?' ? 'about' : 'projects')
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/johannvig"
          aria-label="Visiter mon GitHub"
          className="group relative text-white/40 hover:text-white transition-colors duration-300"
        >
          <Github size={16} />
          <span className="pointer-events-none absolute top-full left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            GitHub
          </span>
        </a>
        <a 
          href="mailto:johanne.vigouroux@imt-atlantique.net" 
          aria-label="M'envoyer un email"
          className="group relative text-white/40 hover:text-white transition-colors duration-300"
        >
          <Mail size={16} />
          <span className="pointer-events-none absolute top-full left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Email
          </span>
        </a>
        <a
          href="/CV_Johanne_Vigouroux.pdf"
          download
          aria-label="Télécharger mon CV"
          className="text-white/40 hover:text-white transition-colors duration-300 font-display text-xs tracking-wide"
        >
          Resume
        </a>
        <a
          href="/Johanne Vigouroux - Portfolio.pdf"
          download
          aria-label="Télécharger mon portfolio"
          className="text-white/40 hover:text-white transition-colors duration-300 font-display text-xs tracking-wide"
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
}
