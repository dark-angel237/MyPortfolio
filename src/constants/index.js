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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
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
    title: "React.js Developer",
    company_name: "DigisolGroup",
    icon: starbucks,
    iconBg: "#f7f8fb",
    date: "March 2026 - now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "NGT Buea",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Feb 2026",
    points: [
      "Develop and maintain modern web and mobile applications using React.js, Flutter, React Native, and other related technologies.",
      "Work closely with designers, product managers, and fellow developers to plan, build, and deliver high-quality digital solutions.",
      "Create responsive, user-friendly interfaces that provide a seamless experience across different devices, platforms, and browsers.",
      "Participate in code reviews, share knowledge with the team, and provide constructive feedback to improve code quality and maintainability.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Skywalker Home & Office",
    icon: shopify,
    iconBg: "#fbfcfc",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Develop and maintain modern web applications using React.js and other related technologies.",
      "Work closely with designers, product managers, and fellow developers to plan, build, and deliver high-quality digital solutions.",
      "Create responsive, user-friendly interfaces that provide a seamless experience across different devices, platforms, and browsers.",
      "Participate in code reviews, share knowledge with the team, and provide constructive feedback to improve code quality and maintainability.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Skywalker",
    icon: meta,
    iconBg: "#f6f5f4",
    date: "Jan 2025 - Present",
    points: [
      "Design visually engaging graphics, branding materials, and digital assets for various platforms of the company.",
      "Collaborate with marketing teams, developers, and clients to create designs that effectively communicate ideas and enhance user engagement.",
      "Develop creative concepts, maintain brand consistency, and produce high-quality visual content across various media.",
      "Review designs, incorporate feedback, and continuously refine creative work to meet project goals and industry standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jorel proved me wrong.",
    name: "K. Vanel",
    designation: "CTO",
    company: "Skywalker",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jorel does.",
    name: "N. Christave",
    designation: "COO",
    company: "NGT Buea",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    testimonial:
      "The set of identity visual Jorel proposed to us was game changing",
    name: "K. perese",
    designation: "CTO",
    company: "Skywalker",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Postgre",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mbongoelvis/CarRentalManagementFrontend",
  },
  {
    name: "IMS (DigisolGroup) ",
    description:
      "Web application that collect, store, organize, process, manage, and retrieve information such that the organizations can efficiently access and use data for daily operations and decision-making.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.digisolgroup.org/",
  },
  {
    name: "E-commerce Platform",
    description:
      "A modern e-commerce platform that provides a seamless shopping experience, allowing users to explore products, manage their carts, and complete secure purchases through an intuitive user-friendly interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://skywalkershop.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
