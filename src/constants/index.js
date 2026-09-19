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
  kennedLogo,
  intratime,
  logoIntratime,
  github,
  agreen,
  agreenlogo,
  albadoulanacer,
  trekform,
  trekia
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work experience",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Prompt Engineer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    title: "Freelance Full Stack Developer",
    company_name: "",
    icon: trustify,
    iconBg: "#383E56",
    points: [
      "Designed and developed mobile apps and websites for individual clients, based on their needs and preferences.",
      "Developed APIs and backend services to power web and mobile applications.",
      "Wrote automated tests to ensure the quality and reliability of the code.",
      "Designed databases and implemented server-side business logic.",
      "Implemented responsive design, cross-browser compatibility and basic SEO optimization.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Kenned Group",
    icon: kennedLogo,
    iconBg: "#E67346",
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
    name: "Trekia",
    description:
      "Trekia is the corporate website of a B2B software, automation and applied AI consultancy. It presents its services (process automation, ERP/CRM integrations, custom software, dashboards & BI, AI for operations), sectors and working method, and includes a blog, a contact page, cookie consent, legal pages and a light/dark theme. I was the designer and developer of this project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: trekia,
    live_link: "https://trekia-brown.vercel.app/",
  },
  {
    name: "Trekform",
    description:
      "Trekform is a vocational training platform for forklift operator certification, heavy machinery and occupational risk prevention (PRL) courses. It includes a course catalog with real upcoming sessions, online enrollment, a blog, a contact form, and an admin panel to manage courses, sessions, enrollments and users, all backed by Supabase. I was the designer and developer of this project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: trekform,
    source_code_link: "https://github.com/acastantrek/trekform",
    live_link: "https://trekform.vercel.app",
    logo: github
  },
  {
    name: "AlbaDoulaNacer",
    description: 
      "AlbaDoulaNacer is a maternity services website offering support for pregnancy, birth, and postpartum stages. It includes a services catalog, a maternity & parenting guide, and a contact form with EmailJS integration. I was the designer and developer of this project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typeccript",
        color: "green-text-gradient",
      },
     
    ],
    image: albadoulanacer,
    source_code_link: "https://github.com/AdrianCastanRuiz/albadoulanacer",
    live_link: "https://albadoulanacer.netlify.app/",
    logo: github

  },
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
     
    ],
    image: agreen,
    source_code_link: "https://github.com/AdrianCastanRuiz/jardineria-web",
    live_link: "https://acn-jardineria.netlify.app/",
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
