import {
  Css,
  Docker,
  Git,
  GraphQL,
  MongoDB,
  NestJS,
  NextJS,
  NodeJS,
  ReactImage,
  Tailwind,
} from '_assets/images';
import { Facebook, Instagram, Linkedin, BookIcon } from '_assets/svg';

const socialDataLinks = [
  {
    link: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: <Facebook />,
  },
  {
    link: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: <Instagram />,
  },
  {
    link: 'https://www.linkedin.com/feed/',
    label: 'Linkedin',
    icon: <Linkedin />,
  },
];

const serviceData = [
  {
    icon: <BookIcon />,
    title: 'PROJECT.FEATURES.SAAS_SCHOOL_APP',
    desc: 'PROJECT.FEATURES.SAAS_SCHOOL_DESC',
  },
  {
    icon: <BookIcon />,
    title: 'PROJECT.FEATURES.RENTAL_APP',
    desc: 'PROJECT.FEATURES.RENTAL_APP_DESC',
  },
  {
    icon: <BookIcon />,
    title: 'PROJECT.FEATURES.BVG_APP',
    desc: 'PROJECT.FEATURES.BVG_APP_DESC',
  },
];

const skillsArray = [
  Css,
  Docker,
  GraphQL,
  NodeJS,
  NestJS,
  NextJS,
  Git,
  MongoDB,
  ReactImage,
  Tailwind,
  Css,
  Docker,
];

const skillsData = {
  FrontEnd: [
    { name: 'ReactJS', mastery: 90 },
    { name: 'React Native', mastery: 90 },
    { name: 'NextJS', mastery: 90 },
    { name: 'HTML5', mastery: 95 },
    { name: 'CSS3', mastery: 90 },
    { name: 'TailwindCSS', mastery: 80 },
  ],
  BackEnd: [
    { name: 'Node.js', mastery: 95 },
    { name: 'Express', mastery: 80 },
    { name: 'NestJS', mastery: 90 },
    { name: 'PostgreSQL', mastery: 100 },
  ],
  'Deployment & Orchestration': [
    { name: 'Git/GitHub', mastery: 85 },
    { name: 'Docker', mastery: 70 },
    { name: 'RESTful APIs', mastery: 90 },
    { name: 'Responsive Design', mastery: 95 },
  ],
};

const languagesOptions = [
  {
    code: 'en',
    label: 'English',
  },
  {
    code: 'fr',
    label: 'Français',
  },
];

export {
  serviceData,
  socialDataLinks,
  skillsArray,
  skillsData,
  languagesOptions,
};
