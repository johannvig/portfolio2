export type ProjectGalleryItem = {
  src: string;
  comment: string;
};

export type Project = {
  name: string;
  urlName: string;
  year: string;
  type: string;
  technologies: string;
  description: string;
  presentation: string;
  link: string;
  caseStudyPage?: string;
  gallery: ProjectGalleryItem[];
  colors: {
    darktitlecol: string;
    lighttitlecol: string;
    darkshapecol: string;
    lightshapecol: string;
  };
};

export const projects: Project[] = [
  {
    name: 'My schedule',
    urlName: 'schedule',
    year: '2026',
    type: 'UI/UX Design',
    technologies: 'Figma',
    description:
      "This project aimed to rethink the ergonomics and visual identity of the university agenda through a user-centered approach. Conducted in Agile mode, it began with a user research and needs prioritization phase (Sprint 1), followed by the design of the information architecture and the development of a functional prototype (Sprint 2). Regular Sprint Reviews with the sponsor finally made it possible to continuously adjust the interface until the final defense.",
    presentation: '/images/project/schedule.png',
    link: 'https://github.com/johannvig/MonAgenda',
    caseStudyPage: '/Portfolio - Schedule Project - Johanne Vigouroux.pdf',
    gallery: [
      { src: '/images/schedule/schedule1.png', comment: "Page d'accueil" },
      { src: '/images/schedule/schedule2.png', comment: 'Produits commercialisés par un producteur' },
      { src: '/images/schedule/schedule3.png', comment: 'Localisation des producteurs' },
      { src: '/images/schedule/schedule4.png', comment: 'Page de connexion' },
      { src: '/images/schedule/schedule5.png', comment: 'Page de création de compte' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#3ddd70',
      darkshapecol: '#3ddd70',
      lightshapecol: '#ded3c7',
    },
  },
  {
    name: 'PictoComm',
    urlName: 'pictocomm',
    year: '2023',
    type: 'Software development / UI/UX Design',
    technologies: 'JavaFX / Figma',
    description:
      "PictoComm is an app designed to make it easier for people with autism to express themselves through pictograms. Using JavaFX, this application offers an intuitive interface allowing users to select and communicate via symbolic images.",
    presentation: '/images/project/pictocomm.png',
    link: 'https://github.com/johannvig/PictoComm',
    caseStudyPage: '/Portfolio - Pictocomm Project - Johanne vigouroux.pdf',
    gallery: [
      { src: '/images/pictocomm/pictocomm1.png', comment: 'Choisir un pictogramme' },
      { src: '/images/pictocomm/pictocomm2.png', comment: 'Créer un séquentiel à partir de pictogramme' },
      { src: '/images/pictocomm/pictocomm3.png', comment: 'Personnaliser un pictogramme 1' },
      { src: '/images/pictocomm/pictocomm4.png', comment: 'Personnaliser un pictogramme 2' },
      { src: '/images/pictocomm/pictocomm5.png', comment: 'Page de favoris' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#0264bc',
      darkshapecol: '#0264bc',
      lightshapecol: '#ffb40340',
    },
  },
  {
    name: 'Power Monitor',
    urlName: 'pm',
    year: '2026',
    type: 'Software development',
    technologies: 'React / Vite / Python / MySQL / Figma',
    description:
      "This application communicates with Meross connected outlets to capture, store and analyze live the consumption of different machines. Our approach began with the collection of user needs, followed by the design of models submitted to an initial feedback phase. After the development of this solution, we conducted targeted user tests in order to continuously assess and optimize the application’s ergonomics and usability.",
    presentation: '/images/project/pm.png',
    link: 'https://github.com/johannvig/Mesures-FabLab',
    gallery: [
      { src: '/images/pm/pm1.png', comment: "Page d'accueil" },
      { src: '/images/pm/pm2.png', comment: 'Produits commercialisés par un producteur' },
      { src: '/images/pm/pm3.png', comment: 'Localisation des producteurs' },
      { src: '/images/pm/pm4.png', comment: 'Page de connexion' },
      { src: '/images/pm/pm5.png', comment: 'Page de connexion' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#3ddd70',
      darkshapecol: '#3ddd70',
      lightshapecol: '#ded3c7',
    },
  },
  {
    name: "Parklec'h",
    urlName: 'parklech',
    year: '2024',
    type: 'Software development',
    technologies: 'Angular IONIC / MangoDB / API Google Map & data.gouv / Figma',
    description:
      "This website allows you to know the availability of parking spaces in various locations across France as well as to know the nearest car park with available spaces.",
    presentation: '/images/project/parklech.png',
    link: 'https://github.com/johannvig/Parklec-h',
    gallery: [
      { src: '/images/parklech/parklech1.png', comment: "Page d'accueil" },
      { src: '/images/parklech/parklech2.png', comment: "Description d'un parking" },
      { src: '/images/parklech/parklech3.png', comment: "Paramètres d'un compte" },
      { src: '/images/parklech/parklech4.png', comment: 'Visualisation des villes où il y a des parkings' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#0002d5',
      darkshapecol: '#3e2efe9e',
      lightshapecol: '#0074de5e',
    },
  },
  {
    name: 'BookScape',
    urlName: 'bookscape',
    year: '2024',
    type: 'Software development',
    technologies: 'Symfony / Twig / Doctrine / SQLite / API',
    description:
      "This project is an evolution of an existing e-commerce site, aiming to improve and extend its functionalities, security and ergonomics. This project is carried out as part of an academic initiative to deepen knowledge in software architecture and modern web development.",
    presentation: '/images/project/bookscape.png',
    link: 'https://github.com/johannvig/BookScape',
    gallery: [
      { src: '/images/bookscape/bookscape1.png', comment: "Page d'accueil" },
      { src: '/images/bookscape/bookscape2.png', comment: 'Produits commercialisés' },
    ],
    colors: {
      darktitlecol: '#fff',
      lighttitlecol: '#434343',
      darkshapecol: '#fcdf44',
      lightshapecol: '#ffd70082',
    },
  },
  {
    name: 'Pierre-feuille-ciseaux',
    urlName: 'pfc',
    year: '2022',
    type: 'Software development',
    technologies: 'Python / OpenCV / CVzone',
    description:
      "This project is an interactive implementation of the classic game Pierre-Feuille-Ciseaux. Using hand detection via webcam and OpenCV library, players can play against the computer by showing their choice with hand gestures. The project also uses speech synthesis to improve interaction by announcing game choices and results.",
    presentation: '/images/project/pierre_feuille_ciseaux.png',
    link: 'https://github.com/johannvig/pierre-feuille-ciseaux',
    gallery: [
      { src: '/images/pfc/pfc1.png', comment: 'Detecteur de mouvements' },
      { src: '/images/pfc/pfc2.png', comment: 'Résumé des parties' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#ff008f',
      darkshapecol: '#b82199',
      lightshapecol: '#2fd8ff5c',
    }
  
  },
  
];
