// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png'; // File not found
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png'; // File not found
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png'; // File not found
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png'; // File not found
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
// import mysqlLogo from './assets/tech_logo/mysql.png'; // File not found
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png'; // File not found
// import javaLogo from './assets/tech_logo/java.png'; // File not found
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png'; // File not found
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png'; // File not found
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png'; // File not found
// import csharpLogo from './assets/tech_logo/csharp.png'; // File not found

import sharepointLogo from './assets/tech_logo/sharepoint.svg';
import cursorLogo from './assets/tech_logo/cursor.svg';
import antigravityLogo from './assets/tech_logo/antigravity.svg';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import almabetterLogo from './assets/company_logo/AlmaBetter_Logo.jpg';
import smalsusLogo from './assets/company_logo/smalsus_logo.svg';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png'; // File not found
// import bsaLogo from './assets/education_logo/bsa_logo.png'; // File not found
// import vpsLogo from './assets/education_logo/vps_logo.png'; // File not found
import universityLogo from './assets/education_logo/university.png';

// Project Section Logo's
import ecommerceAppLogo from './assets/work_logo/ecommerce_app.svg';
import videoCallingAppLogo from './assets/work_logo/video_calling_app.svg';
import currencyConverterAppLogo from './assets/work_logo/currency_converter_app.svg';
import portfolioAppLogo from './assets/work_logo/portfolio_app.svg';
import skywingsAppLogo from './assets/work_logo/skywings_app.svg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo }, // Logo file not found
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo }, // Logo file not found
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo }, // Logo file not found
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'React Native', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo }, // Logo file not found
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MySQL', logo: mysqlLogo }, // Logo file not found
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'SharePoint', logo: sharepointLogo },
      // { name: 'PostgreSQL', logo: postgreLogo }, // Logo file not found
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo }, // Logo file not found
      // { name: 'Java', logo: javaLogo }, // Logo file not found
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo }, // Logo file not found
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo }, // Logo file not found
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Cursor AI', logo: cursorLogo },
      { name: 'Antigravity', logo: antigravityLogo },
      // { name: 'Figma', logo: figmaLogo }, // Logo file not found
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: smalsusLogo,
      role: "React & SPFx Developer",
      company: "Smalsus Infolabs Pvt. Ltd.",
      date: "Jan 2026 to Present",
      desc: "Currently working as a React and SPFx Developer, building modern and responsive web applications and SharePoint Framework (SPFx) web parts. Responsible for developing reusable UI components, integrating with backend services, and ensuring high performance and scalable solutions.",
      skills: [
        "React JS",
        "SPFx",
        "JavaScript",
        "TypeScript",
        "SharePoint",
        "Frontend Development"
      ],
    },
    {
      id: 0,
      img: almabetterLogo,
      role: "Full Stack Developer Mentor",
      company: "AlmaBetter",
      date: "July 23, 2024 to August 24, 2024.",
      desc: "Working as a Full Stack Developer Mentor at AlmaBetter, guiding and mentoring aspiring developers in MERN stack technologies. Responsible for conducting code reviews, providing technical guidance, creating learning materials, and helping students build real-world projects to enhance their programming skills and career readiness.",
      skills: [
        "MERN Stack",
        "JavaScript",
        "React JS",
        "Node JS",
        "MongoDB",
        "Express JS",
        "Mentoring",
        "Code Review",
        "Technical Guidance",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: universityLogo,
      school: "Techno India University",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Technology (B.Tech) from Techno India University. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Techno India University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Skywings Next Generation Corporate Website",
      description:
        "A professional and modern corporate website developed for Skywings NextGen Tech Pvt. Ltd. The site features a clean, responsive design that showcases the company's services, mission, and portfolio. Built with a focus on performance and seamless user experience, ensuring compatibility across all devices.",
      image: skywingsAppLogo,
      tags: ["React JS", "Tailwind CSS", "Corporate", "Responsive Design", "Frontend"],
      github: "https://github.com/Ashutosh1702/Skywings-NextGen-Tech-Pvt-Ltd",
      webapp: "https://www.skywingsnextgen.com/",
    },
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive personal portfolio website showcasing my skills, projects, and experience. Built with React.js and Tailwind CSS, featuring smooth animations, interactive components, contact form with EmailJS integration, and a clean, professional design. The portfolio includes sections for about me, skills, education, experience, projects, and contact information.",
      image: portfolioAppLogo,
      tags: ["React JS", "Tailwind CSS", "EmailJS", "Responsive Design", "Vite", "Modern UI/UX"],
      github: "https://github.com/Ashutosh1702/Ashutosh-PortFolio",
      webapp: "https://ashutosh-port-folio-mvhm.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce Shopping App",
      description:
        "A comprehensive full-stack e-commerce application built with modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, order management, and admin dashboard. The app provides a seamless shopping experience with responsive design and secure payment processing.",
      image: ecommerceAppLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Gateway", "JWT", "Tailwind CSS"],
      github: "https://github.com/Ashutosh1702/Ecommerce-App",
      webapp: "https://ecommerce-app-3u1f.vercel.app/",
    },
  ];  