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
  threejs,
  meower,
  gloton,
  trustify,
  winworldLogo,
  intratime,
  logoIntratime,
  github,
  agreen,
  agreenlogo
} from "../assets";

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
    title: "React Developer",
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
    title: "Freelance Web Developer",
    company_name: "",
    icon: trustify,
    iconBg: "#383E56",
    points: [
      "Designed and developed responsive websites using React, HTML, CSS, and TypeScript.",
      "Built custom websites for individual clients based on their needs and preferences",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Optimized websites for basic SEO and loading speed",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "WinWorld",
    icon: winworldLogo,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript, Next JS, Php, SQL and other related technologies.",
      "Integrated RESTful APIs and third-party services, ensuring seamless data flow and connectivity.",
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
    name: "AcnJardineria",
    description:
      "AcnJardineria is a gardening services company. This is the website where you can see all the services it offers. It also includes a contact form. I was the designer and developer of this project.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: agreen,
    source_code_link: "https://github.com/AdrianCastanRuiz/jardineria-web",
    logo: github
  },
  {
    name: "Meower",
    description:
      "Meower is a Social Media application created to share posts between the Meower community. Once you create your profile, you can start following other users to see what are they up to and chat with them! Like, repost or bookmark some posts and deep dive into this awesome application! I was the designer and developer of this project.",
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
    logo: github
  },

  {
    name: "Glotón",
    description:
      "Glotón is a home delivery platform of Spanish origin that allows users to buy, receive and instantly send any product within a city. Founded in 2024. I implemented the backend of this application.",
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
    logo: github

  },
  // {
  //   name: "Intratime",
 
  //   description:
  //     "Intratime lets you know what's happening in your business, as employee timesheets let you know how many hours they're working and where they're located.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Laravel",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: intratime,
  //   source_code_link: "https://www.intratime.es/",
  //   logo: logoIntratime

  // }
];

export { services, technologies, experiences, testimonials, projects };
