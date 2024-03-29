import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  meower,
  gloton,
} from "../assets";
import trustify from "../assets/company/trustify.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Trustify",
    icon: trustify,
    iconBg: "#383E56",
    // date: "January 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Adrian is very competent and hardworking. He always finds solutions to all problems and is able to build very optimal applications.",
    name: "Miguel Cobacho",
    designation: "CTO",
    company: "Trustify",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Adrian is a web developer who truly cares about clients.",
    name: "Pedro Linares Molina",
    designation: "Head of Frontend Dev",
    company: "Trustify",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Meower",
    description:
      "Meower is a Social Media application created to share posts between the Meower community. Once you create your profile, you can start following other users to see what are they up to and chat with them! Like, repost or bookmark some posts and deep dive into this awesome application!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: meower,
    source_code_link: "https://github.com/nds-fsd/twitter",
  },

  {
    name: "Glotón",
    description:
      "Glotón is a home delivery platform of Spanish origin that allows users to buy, receive and instantly send any product within a city. Founded in 2024.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gloton,
    source_code_link: "https://github.com/nds-fsd/glovo",
  },
];

export { services, technologies, experiences, testimonials, projects };
