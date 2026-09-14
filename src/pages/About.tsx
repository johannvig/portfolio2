import { useEffect, useRef, useState } from 'react';
import {
  Briefcase,
  Code2,
  Layers,
  Rocket,
  TestTube,
  Compass,
  Server,
  FileText,
  ArrowUpRight,
  Calendar,
  MapPin,
} from 'lucide-react';

type AboutProps = {
  onNavigate: (page: string) => void;
};

const experiences = [
  {
    role: 'Software Engineering',
    company: 'Capgemini',
    type: 'Apprenticeship',
    period: 'sept. 2025 - now',
    location: 'Rennes, Bretagne, France',
    description:
      'Integrated into an Agile SAFe environment, contributing to large-scale public sector digital transformation projects.',
    bullets: [
      { 
        icon: Code2, 
        text: '<strong>Software Development</strong>: Backend development using <strong>Java Spring Boot</strong>, ensuring system <strong>scalability</strong> and <strong>performance</strong>.', 
        color: 'text-cyan-400'
      },
      { 
        icon: TestTube, 
        text: '<strong>Quality Assurance & Testing</strong>: Executed comprehensive testing strategies using <strong>Cucumber</strong>, <strong>XRAY</strong> and documented technical processes in <strong>Confluence</strong>.', 
        color: 'text-sky-400'
      },
      { 
        icon: Compass, 
        text: '<strong>Functional Demonstrations</strong>: Led <strong>sprint demos</strong> to stakeholders, translating technical progress into functional <strong>business value</strong>.', 
        color: 'text-indigo-400'
      },
      { 
        icon: Server, 
        text: '<strong>Technical Troubleshooting</strong>: <strong>Debugging</strong> and environment management using <strong>IntelliJ</strong>, <strong>Bash</strong> and <strong>Bruno</strong> to ensure system <strong>reliability</strong>.', 
        color: 'text-fuchsia-400'
      },
    ],
    skills: ['Java Spring Boot', 'Cucumber', 'XRAY', 'Confluence', 'IntelliJ', 'Bash', 'Bruno'],
    accent: 'from-cyan-500/10 to-transparent',
    dot: 'bg-cyan-400',
  },
  {
    role: 'UI & Web Development Intern',
    company: 'Koust',
    type: 'Internship',
    period: 'apr. 2024 - jul. 2024 · 4 months',
    location: 'Brest, Bretagne, France',
    description:
      'Focused on enhancing user experience and interface consistency for a professional catering management solution.',
    bullets: [
      { 
        icon: Layers, 
        text: '<strong>Product Design</strong>: Designed new <strong>user interfaces (UI)</strong> and <strong>wireframes</strong> using <strong>Figma</strong>, focusing on user-centric design principles.', 
        color: 'text-pink-400' 
      },
      { 
        icon: Code2, 
        text: '<strong>Mobile Development</strong>: Developed and redesigned mobile application features using <strong>Angular Ionic</strong> and <strong>PL/SQL</strong>.', 
        color: 'text-purple-400' 
      },
      { 
        icon: Rocket, 
        text: "<strong>Web Optimization</strong>: Enhanced the web platform's efficiency using <strong>Oracle APEX</strong> and <strong>API integration</strong>.", 
        color: 'text-cyan-400' 
      },
    ],
    skills: ['Figma', 'Angular Ionic', 'PL/SQL', 'Oracle APEX', 'API'],
    accent: 'from-pink-500/10 to-transparent',
    dot: 'bg-pink-400',
  }
];

const expertises = [
  {
    icon: Layers,
    title: 'Interactive prototyping',
    text: "During the design phase of a project, I create an interactive version of the model with Figma to allow you to project yourself more easily from a specifications document.",
    gradient: 'from-cyan-500/20 to-blue-500/10',
    iconColor: 'text-cyan-400',
    border: 'hover:border-cyan-500/30',
  },
  {
    icon: Layers,
    title: 'UX Research & Tests Users',
    text: "During the research and testing phases, I compare the models with real users and analyze the performance of the interface. This allows to validate the ergonomics, eliminate friction and optimize the experience before launching development.",
    gradient: 'from-pink-500/20 to-pink-500/10',
    iconColor: 'text-pink-400',
    border: 'hover:border-pink-500/30',
  },
  {
    icon: Rocket,
    title: 'Build and deploy an application',
    text: "Once the web design step is completed, I take care of developing the graphic interface for the different pages of the site and deploying it on the web.",
    gradient: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
    border: 'hover:border-emerald-500/30',
  },
  {
    icon: TestTube,
    title: 'Testing and optimizing an application',
    text: 'I audit and optimize applications by combining usability tests and performance analyses, thus ensuring a smooth and efficient final product.',
    gradient: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
    border: 'hover:border-violet-500/30',
  },
  {
    icon: Compass,
    title: 'Lead a project',
    text: "I am able to lead projects from design to delivery, ensuring compliance with deadlines and requirements thanks to the agile method.",
    gradient: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-400',
    border: 'hover:border-amber-500/30',
  },
  {
    icon: Server,
    title: 'Administer complex communicating computer systems',
    text: "I master the administration of complex computer systems, ensuring smooth and secure data communication.",
    gradient: 'from-blue-500/20 to-sky-500/10',
    iconColor: 'text-blue-400',
    border: 'hover:border-blue-500/30',
  },
];

const skillGroups = [
  {
    category: 'UI/UX Design',
    color: 'text-blue-400',
    dot: 'bg-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    tools: ['Miro', 'Figma', 'Storybook','Maze'],
  },
  {
    category: 'Frontend',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular Ionic'],
  },
  {
    category: 'Backend',
    color: 'text-emerald-400',
    dot: 'bg-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    tools: ['Java Spring Boot', 'Node.js', 'Symfony', 'Flask', 'PL/SQL', 'NoSQL'],
  },
  {
    category: 'Tools & DevOps',
    color: 'text-violet-400',
    dot: 'bg-violet-400',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    tools: ['Azure DevOps', 'Jira', 'Confluence', 'Trello', 'Git', 'Gantt', 'Notion', 'Bruno', 'Docker', , 'Lighthouse','EcoIndex'],
  },
];

function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
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

  return (
    <section
      ref={ref}
      id={id}
      className={`opacity-0-init ${visible ? 'animate-fade-up' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

export default function About({ onNavigate }: AboutProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const renderBulletText = (text: string) => ({ __html: text });

  return (
    <div className="relative z-10">
      {/* Hero header */}
      <header className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Colored glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl" />
        </div>

        <h1
          className={`font-display font-bold leading-none tracking-tight opacity-0-init relative z-10 ${loaded ? 'animate-fade-up delay-300' : ''}`}
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          <span className="block text-white">Who</span>
          <span className="block about-gradient-text">am I ?</span>
        </h1>

        <p className={`mt-8 max-w-2xl text-white/40 text-base md:text-lg font-light leading-relaxed opacity-0-init relative z-10 ${loaded ? 'animate-fade-up delay-400' : ''}`}>
          Developer passionate about clean code, neat design and effective solutions.
          Learn about my background, experiences, and the daily motivation that drives me.
        </p>

        {/* Stat chips */}
        <div className={`mt-10 flex flex-wrap justify-center gap-4 opacity-0-init relative z-10 ${loaded ? 'animate-fade-up delay-500' : ''}`}>
          {[
            { label: 'Experiences', value: '2+', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5' },
            { label: 'Years of study', value: '4', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' },

          ].map((stat) => (
            <div key={stat.label} className={`border rounded-2xl px-6 py-3 backdrop-blur-sm ${stat.color}`}>
              <div className="font-display font-bold text-2xl">{stat.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0-init ${loaded ? 'animate-fade-in delay-900' : ''}`}>
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-display">Scroll</span>
          <div className="w-px h-12 overflow-hidden bg-white/10">
            <div className="w-full h-1/2 bg-white/50 scroll-line" />
          </div>
        </div>
      </header>

      {/* Bio section */}
      <Section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-display tracking-[0.3em] text-cyan-400/60 uppercase">01</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
          <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">About me</span>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
              Johanne Vigouroux
            </h2>
            <p className="text-cyan-400/70 text-sm tracking-wider uppercase font-display">
              Student software engineer
            </p>
          </div>

          <div className="md:col-span-2 space-y-4 text-white/50 text-base leading-relaxed">
            <p>
              I started my academic journey in computer science at the IUT of Laval before continuing
              my studies at the Université du Québec à Chicoutimi (UQAC) as a student in a
              two-degree program. Currently in the second year of a software engineer at IMT
              Atlantic, I fully immerse myself in each project by focusing on effective solutions.
            </p>
            <p>
              I am proficient in various UI/UX design tools and methods, such as 
              user research, wireframing and advanced interactive prototyping on Figma, 
              as well as usability testing and performance optimization with Lighthouse and EcoIndex.
            </p>
            <p>
              I design web solutions using a wide range of technologies, ranging from
              Basic languages such as HTML, CSS, and JavaScript, to PHP and various frameworks like
              Angular IONIC, Node.js and Symfony.
            </p>
          </div>
        </div>
      </Section>

      {/* Experiences */}
      <Section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-display tracking-[0.3em] text-violet-400/60 uppercase">02</span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">
            Work experiences
          </span>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 backdrop-blur-sm overflow-hidden"
            >
              {/* Gradient accent background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 rounded-full ${exp.dot}`} />
                      <Briefcase size={16} className="text-white/40" />
                      <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
                    </div>
                    <p className="text-white/50 text-sm font-medium pl-5">
                      {exp.company} · <span className="text-white/30">{exp.type}</span>
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 text-white/30 text-xs tracking-wide">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/30 text-xs tracking-wide">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-white/40 text-sm leading-relaxed mb-6">{exp.description}</p>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                      <bullet.icon size={16} className={`${bullet.color} mt-0.5 shrink-0`} />
                      <span
                        className="experience-bullet"
                        dangerouslySetInnerHTML={renderBulletText(bullet.text)}
                      />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-white/60 border border-white/10 rounded-full px-3 py-1 tracking-wide hover:border-white/25 hover:text-white/80 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CV download */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="group flex items-center gap-2 border border-white-500/30 text-white-300/80 px-7 py-3 rounded-full font-display font-medium text-sm tracking-wide hover:border-cyan-400/60 hover:text-cyan-200 hover:bg-cyan-500/5 transition-all duration-300"
          >
            <FileText size={15} />
            View Resume
            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </Section>

      {/* Expertises */}
      <Section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-display tracking-[0.3em] text-emerald-400/60 uppercase">03</span>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
          <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">Expertises</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertises.map((exp, idx) => (
            <div
              key={idx}
              className={`group relative border border-white/10 rounded-2xl p-8 ${exp.border} transition-all duration-500 backdrop-blur-sm overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-500 bg-white/[0.02]">
                    <exp.icon size={18} className={`${exp.iconColor} transition-colors duration-500`} />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white leading-tight">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{exp.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-display tracking-[0.3em] text-amber-400/60 uppercase">04</span>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
          <span className="text-xs font-display tracking-[0.3em] text-white/30 uppercase">My Tools</span>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <h3 className={`font-display font-semibold text-sm ${group.color}`}>{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`group flex items-center gap-2 border rounded-xl px-5 py-2.5 transition-all duration-300 cursor-default bg-white/[0.02] ${group.border}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${group.dot}`} />
                    <span className="font-display font-medium text-sm text-white/60 group-hover:text-white/90 transition-colors duration-300">
                      {tool}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <Section className="px-6 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 relative z-10">
          Let's work <span className="about-gradient-text">together</span>
        </h2>
        <p className="text-white/40 text-base mb-8 max-w-md mx-auto relative z-10">
          An idea to develop ? Contact me.
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3.5 rounded-full font-display font-semibold text-sm tracking-wide hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:gap-3 shadow-lg shadow-cyan-500/20 z-10"
        >
          Back to home
          <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
        </button>
      </Section>
    </div>
  );
}
