import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Clock3, Layers3, Sparkles, Target, Workflow } from 'lucide-react';
import { type Project } from '../data/projects';

type CaseStudyProps = {
  project: Project;
  onNavigate: (page: string) => void;
};

type StudyContent = {
  kicker: string;
  title: string;
  intro: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: Array<{ label: string; value: string }>;
  blocks: Array<{ title: string; text: string }>;
};

const studyContent: Record<string, StudyContent> = {
  'case-study-pm': {
    kicker: 'Product story',
    title: 'Turning a dense interface into a guided experience',
    intro:
      'This case study explores how a fragmented dashboard was reframed around clarity, rhythm, and fast decision-making. The goal was not to add more screens, but to remove friction and make the essential information instantly visible.',
    summary:
      'We started from a blank editorial direction: fewer visual distractions, stronger hierarchy, and a calmer reading flow. The interface was then organized into a sequence of focused moments, each one helping the user answer a different question without cognitive overload.',
    challenge:
      'Users needed to understand what was happening in real time, but the original experience mixed alerts, data, and controls in the same space. That made the interface feel busy and difficult to scan.',
    approach:
      'The new direction relied on modular panels, condensed data blocks, and strong spacing rules. Each section was designed to behave like a chapter in a narrative rather than an isolated widget.',
    outcome:
      'The result is a more intentional product surface: lighter to read, easier to trust, and better suited for quick operational decisions.',
    metrics: [
      { label: 'Focus', value: 'Clear visual hierarchy' },
      { label: 'Pace', value: 'Fewer competing elements' },
      { label: 'Reading', value: 'Designed for fast scanning' },
    ],
    blocks: [
      {
        title: 'Editorial structure',
        text:
          'The content was organized into large sections with distinct roles: overview, context, action, and impact. This reduces ambiguity and lets the eye move naturally from one idea to the next.',
      },
      {
        title: 'Interaction tone',
        text:
          'Instead of dense controls everywhere, the UI uses deliberate moments of action. Buttons, cards, and data points are visually separated so the user always knows where to look first.',
      },
      {
        title: 'Visual language',
        text:
          'A restrained palette, soft surfaces, and a bold typographic rhythm were used to create a presentation that feels more like a product story than a technical dashboard.',
      },
    ],
  },
  'case-study-schedule': {
    kicker: 'Experience design',
    title: 'Reframing a planning tool as a calm daily companion',
    intro:
      'This second case study focuses on a different direction altogether: a planning experience shaped like a personal workspace. The objective was to move away from the traditional academic dashboard and create something more human, more flexible, and easier to return to every day.',
    summary:
      'The concept is built around a softer rhythm and a more intuitive sequence of actions. Rather than exposing every feature at once, the page guides the user through priorities, deadlines, and routines with a stronger sense of pacing.',
    challenge:
      'Planning interfaces often become overloaded with filters, tabs, and dense calendars. The challenge here was to keep the power of a full planning tool while making it feel lightweight and approachable.',
    approach:
      'We introduced a calmer composition: clearer surfaces, simplified action areas, and stronger separation between planning, review, and follow-up states. The layout behaves like a personal dashboard rather than an administrative tool.',
    outcome:
      'The final direction creates a sense of control without pressure. It is designed to feel usable in a hurry, but still pleasant when users spend longer moments inside it.',
    metrics: [
      { label: 'Mood', value: 'Calm and focused' },
      { label: 'Flow', value: 'Tasks organized by priority' },
      { label: 'Use', value: 'Personal workspace feel' },
    ],
    blocks: [
      {
        title: 'Daily rhythm',
        text:
          'The page is structured so the user sees what matters now, what comes next, and what can wait. This avoids the feeling of being confronted by the whole schedule at once.',
      },
      {
        title: 'Decision support',
        text:
          'Small contextual elements help the user make faster choices without opening extra layers. The experience stays compact while still remaining informative.',
      },
      {
        title: 'Tone of voice',
        text:
          'The content is written to feel reassuring and direct. It presents the planning tool as a companion for organization rather than a system to manage.',
      },
    ],
  },
};

export default function CaseStudy({ project, onNavigate }: CaseStudyProps) {
  const content = studyContent[project.caseStudyPage ?? ''] ?? studyContent['case-study-pm'];
  const accent = project.colors.darkshapecol;
  const titleCol = project.colors.darktitlecol;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onNavigate('projects');
    };

    window.addEventListener('keydown', onKey);
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => window.removeEventListener('keydown', onKey);
  }, [onNavigate, project.gallery.length]);

  return (
    <main className="relative z-10 px-6 md:px-16 py-28 max-w-6xl mx-auto">
      <button
        type="button"
        onClick={() => onNavigate('projects')}
        className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 mb-10"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
        Back to projects
      </button>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />
        <div
          className="absolute -top-36 -right-36 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: accent }}
        />

        <div className="relative p-8 md:p-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
            <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">
              {content.kicker}
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4" style={{ color: titleCol }}>
            {content.title}
          </h1>

          <p className="text-white/40 text-sm mb-8 tracking-wide">{project.name} · {project.year}</p>

          <p className="text-white/55 text-base md:text-lg leading-relaxed mb-10 max-w-4xl">
            {content.intro}
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {content.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">{metric.label}</div>
                <div className="text-white/80 font-display text-lg">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3 mb-10">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-white/70 mb-3">
                <Target size={16} />
                <h2 className="font-display text-lg">Challenge</h2>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{content.challenge}</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-white/70 mb-3">
                <Workflow size={16} />
                <h2 className="font-display text-lg">Approach</h2>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{content.approach}</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-white/70 mb-3">
                <Sparkles size={16} />
                <h2 className="font-display text-lg">Outcome</h2>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{content.outcome}</p>
            </article>
          </div>

          <section className="grid gap-4 md:grid-cols-3 mb-10">
            {content.blocks.map((block, index) => (
              <article key={block.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Layers3 size={16} className="text-white/30" />
                  <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">
                    Section {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white mb-2">{block.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{block.text}</p>
              </article>
            ))}
          </section>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] p-6 mb-10">
            <p className="text-white/50 text-base leading-relaxed max-w-4xl">{content.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white/15 text-white/70 px-6 py-3 rounded-full font-display font-medium text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-300"
            >
              <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}