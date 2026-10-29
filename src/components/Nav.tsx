import { Briefcase, FileText, Github, Linkedin, Mail } from 'lucide-react';

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
        <a href="https://github.com/johannvig" className="text-white/40 hover:text-white transition-colors duration-300">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com/in/johanne-vigouroux-ab8810244/" className="text-white/40 hover:text-white transition-colors duration-300">
          <Linkedin size={16} />
        </a>
        <a 
          href="mailto:johanne.vigouroux@imt-atlantique.net" 
          className="text-white/40 hover:text-white transition-colors duration-300"
        >
          <Mail size={16} />
        </a>
        <a
          href="/CV_Johanne_Vigouroux.pdf"
          download
          aria-label="Télécharger mon CV"
          title="Télécharger mon CV"
          className="text-white/40 hover:text-white transition-colors duration-300"
        >
          <FileText size={16} />
        </a>
        <a
          href="/Johanne Vigouroux - Portfolio.pdf"
          download
          aria-label="Télécharger mon portfolio"
          title="Télécharger mon portfolio"
          className="text-white/40 hover:text-white transition-colors duration-300"
        >
          <Briefcase size={16} />
        </a>
      </div>
    </nav>
  );
}
