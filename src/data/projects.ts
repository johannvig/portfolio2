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
    presentation: '/images/project/bioclipse.png',
    link: 'https://github.com/johannvig/MonAgenda',
    caseStudyPage: 'case-study-schedule',
    gallery: [
      { src: '/images/bioclipse/bioclipse1.png', comment: "Page d'accueil" },
      { src: '/images/bioclipse/bioclipse2.png', comment: 'Produits commercialisés par un producteur' },
      { src: '/images/bioclipse/bioclipse3.png', comment: 'Localisation des producteurs' },
      { src: '/images/bioclipse/bioclipse4.png', comment: 'Page de connexion' },
      { src: '/images/bioclipse/bioclipse5.png', comment: 'Page de création de compte' },
      { src: '/images/bioclipse/bioclipse6.png', comment: "Page des paramètres d'un compte" },
      { src: '/images/bioclipse/bioclipse7.png', comment: 'Page de la messagerie' },
      { src: '/images/bioclipse/bioclipse9.png', comment: "Page d'un produit" },
      { src: '/images/bioclipse/bioclipse10.png', comment: 'Page de la liste des favoris' },
      { src: '/images/bioclipse/bioclipse11.png', comment: 'Page du panier' },
      { src: '/images/bioclipse/bioclipse12.png', comment: "Page de l'historique des commandes" },
      { src: '/images/bioclipse/bioclipse13.png', comment: 'Page des inventaires' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#3ddd70',
      darkshapecol: '#3ddd70',
      lightshapecol: '#ded3c7',
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
    presentation: '/images/project/bioclipse.png',
    link: 'https://github.com/johannvig/Mesures-FabLab',
    gallery: [
      { src: '/images/bioclipse/bioclipse1.png', comment: "Page d'accueil" },
      { src: '/images/bioclipse/bioclipse2.png', comment: 'Produits commercialisés par un producteur' },
      { src: '/images/bioclipse/bioclipse3.png', comment: 'Localisation des producteurs' },
      { src: '/images/bioclipse/bioclipse4.png', comment: 'Page de connexion' },
      { src: '/images/bioclipse/bioclipse5.png', comment: 'Page de création de compte' },
      { src: '/images/bioclipse/bioclipse6.png', comment: "Page des paramètres d'un compte" },
      { src: '/images/bioclipse/bioclipse7.png', comment: 'Page de la messagerie' },
      { src: '/images/bioclipse/bioclipse9.png', comment: "Page d'un produit" },
      { src: '/images/bioclipse/bioclipse10.png', comment: 'Page de la liste des favoris' },
      { src: '/images/bioclipse/bioclipse11.png', comment: 'Page du panier' },
      { src: '/images/bioclipse/bioclipse12.png', comment: "Page de l'historique des commandes" },
      { src: '/images/bioclipse/bioclipse13.png', comment: 'Page des inventaires' },
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
      { src: '/images/parklech/parklech5.png', comment: 'Page de connexion' },
      { src: '/images/parklech/parklech6.png', comment: 'Page de création de compte' },
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
      { src: '/images/bookscape/bookscape3.png', comment: 'Page produit' },
      { src: '/images/bookscape/bookscape4.png', comment: 'Panier' },
      { src: '/images/bookscape/bookscape5.png', comment: 'Page de connexion' },
      { src: '/images/bookscape/bookscape6.png', comment: 'Profil utilisateur' },
      { src: '/images/bookscape/bookscape7.png', comment: "Dashboard d'administrateur des produits" },
      { src: '/images/bookscape/bookscape8.png', comment: "Dashboard d'administrateur des utilisateurs" },
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
    },
  },
  {
    name: 'Bioclipse',
    urlName: 'bioclipse',
    year: '2023',
    type: 'Software development',
    technologies: 'PHP / MySQL / Figma / Chatbot OpenAI',
    description:
      "This project, carried out throughout the S3 semester, aims to design and develop a web application for food producers in order to distribute their products according to professional standards. The objectives of this project are to create an application within a team using a development approach, to collect and formalize needs based on an initially vague or incomplete description, and to develop an application that handles data and respects quality paradigms.",
    presentation: '/images/project/bioclipse.png',
    link: 'https://github.com/johannvig/Bioclipse',
    gallery: [
      { src: '/images/bioclipse/bioclipse1.png', comment: "Page d'accueil" },
      { src: '/images/bioclipse/bioclipse2.png', comment: 'Produits commercialisés par un producteur' },
      { src: '/images/bioclipse/bioclipse3.png', comment: 'Localisation des producteurs' },
      { src: '/images/bioclipse/bioclipse4.png', comment: 'Page de connexion' },
      { src: '/images/bioclipse/bioclipse5.png', comment: 'Page de création de compte' },
      { src: '/images/bioclipse/bioclipse6.png', comment: "Page des paramètres d'un compte" },
      { src: '/images/bioclipse/bioclipse7.png', comment: 'Page de la messagerie' },
      { src: '/images/bioclipse/bioclipse9.png', comment: "Page d'un produit" },
      { src: '/images/bioclipse/bioclipse10.png', comment: 'Page de la liste des favoris' },
      { src: '/images/bioclipse/bioclipse11.png', comment: 'Page du panier' },
      { src: '/images/bioclipse/bioclipse12.png', comment: "Page de l'historique des commandes" },
      { src: '/images/bioclipse/bioclipse13.png', comment: 'Page des inventaires' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#3ddd70',
      darkshapecol: '#3ddd70',
      lightshapecol: '#ded3c7',
    },
  },
  {
    name: 'GuessCountry',
    urlName: 'guesscountry',
    year: '2024',
    type: 'Software development',
    technologies: 'PHP / RESTCountries API / MySQL',
    description:
      "The Guess Country Game is a simple and engaging web-based game designed to allow users to test their knowledge of countries across various categories such as flags, currencies, languages, locations and capitals.",
    presentation: '/images/project/guesscountry.png',
    link: 'https://github.com/johannvig/guessCountry',
    gallery: [
      { src: '/images/guesscountry/guesscountry1.png', comment: 'Page de connexion' },
      { src: '/images/guesscountry/guesscountry2.png', comment: "Page d'enregistrement" },
      { src: '/images/guesscountry/guesscountry3.png', comment: 'Mode de jeu' },
      { src: '/images/guesscountry/guesscountry4.png', comment: 'Deviner le pays associé au drapeau' },
      { src: '/images/guesscountry/guesscountry5.png', comment: 'Page de statistique de jeu' },
      { src: '/images/guesscountry/guesscountry6.png', comment: 'Deviner le pays associé à la monnaie' },
      { src: '/images/guesscountry/guesscountry7.png', comment: 'Score de fin de partie' },
      { src: '/images/guesscountry/guesscountry8.png', comment: 'Deviner le pays associé à la langue' },
      { src: '/images/guesscountry/guesscountry9.png', comment: 'Deviner le pays associé à la localisation' },
      { src: '/images/guesscountry/guesscountry10.png', comment: 'Deviner le pays associé à la capitale' },
    ],
    colors: {
      darktitlecol: '#ded3c7',
      lighttitlecol: '#ff008f',
      darkshapecol: '#b82199',
      lightshapecol: '#2fd8ff5c',
    },
  },
  
];
