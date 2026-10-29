import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Calendar, Tag, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { type Project } from '../data/projects';

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const accent = project.colors.darkshapecol;
  const titleCol = project.colors.darktitlecol;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setGalleryIdx((i) => Math.min(i + 1, project.gallery.length - 1));
      if (e.key === 'ArrowLeft') setGalleryIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project.gallery.length, onClose]);

  const galleryItem = project.gallery[galleryIdx];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-8 mx-4 border border-white/10 rounded-2xl bg-[#0c0c0c] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent header bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />
        <div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: accent }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
        >
          <X size={16} />
        </button>

        <div className="relative p-8 md:p-12">
          {/* Title */}
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
            <span className="text-xs font-display tracking-widest text-white/30 uppercase">
              {project.year}
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: titleCol }}>
            {project.name}
          </h2>

          <p className="text-white/40 text-sm mb-6 tracking-wide">{project.type}</p>

          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Calendar size={14} />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Tag size={14} />
              <span>{project.technologies}</span>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Layers size={16} className="text-white/30" />
                <span className="text-xs font-display tracking-widest text-white/30 uppercase">
                  Galerie · {galleryIdx + 1} / {project.gallery.length}
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <div className="aspect-video flex items-center justify-center bg-[#080808]">
                  <img
                    src={galleryItem.src}
                    alt={galleryItem.comment || project.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                {galleryItem.comment && (
                  <p className="text-center text-white/40 text-sm py-3 px-4 border-t border-white/10">
                    {galleryItem.comment}
                  </p>
                )}

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setGalleryIdx((i) => Math.max(i - 1, 0))}
                      disabled={galleryIdx === 0}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setGalleryIdx((i) => Math.min(i + 1, project.gallery.length - 1))}
                      disabled={galleryIdx === project.gallery.length - 1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {project.gallery.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {project.gallery.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIdx(i)}
                      className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition-all duration-300 ${
                        i === galleryIdx
                          ? 'border-white/40 opacity-100'
                          : 'border-white/10 opacity-40 hover:opacity-70'
                      }`}
                    >
                      <div className="w-full h-full flex items-center justify-center bg-[#080808]">
                        <img
                          src={item.src}
                          alt={item.comment}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white/15 text-white/70 px-6 py-3 rounded-full font-display font-medium text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-300"
            >
              <Github size={15} />
              Voir sur GitHub
              <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
            </a>

            {project.caseStudyPage && (
              <a
                href={project.caseStudyPage}
                download
                className="group inline-flex items-center gap-2 border border-cyan-400/25 bg-cyan-400/10 text-cyan-100 px-6 py-3 rounded-full font-display font-medium text-sm tracking-wide hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-white transition-all duration-300"
              >
                Download case study
                <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
