// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png'; // File not found
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
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

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import almabetterLogo from './assets/company_logo/AlmaBetter_Logo.jpg';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png'; // File not found
// import bsaLogo from './assets/education_logo/bsa_logo.png'; // File not found
// import vpsLogo from './assets/education_logo/vps_logo.png'; // File not found
import universityLogo from './assets/education_logo/university.png';

// Project Section Logo's
import ecommerceAppLogo from './assets/work_logo/ecommerce_app.svg';
import videoCallingAppLogo from './assets/work_logo/video_calling_app.svg';
import currencyConverterAppLogo from './assets/work_logo/currency_converter_app.svg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo }, // Logo file not found
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo }, // Logo file not found
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo }, // Logo file not found
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
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
      // { name: 'Figma', logo: figmaLogo }, // Logo file not found
    ],
  },
];

  export const experiences = [
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
      title: "E-Commerce Shopping App",
      description:
        "A comprehensive full-stack e-commerce application built with modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, order management, and admin dashboard. The app provides a seamless shopping experience with responsive design and secure payment processing.",
      image: ecommerceAppLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Gateway", "JWT", "Tailwind CSS"],
      github: "https://github.com/Ashutosh1702/Shopify-Ecommerce-App",
      webapp: "https://shopify-ecommerce-app-jyt1.vercel.app/",
    },
    {
      id: 1,
      title: "Video Calling Application",
      description:
        "A real-time video calling application with advanced features like screen sharing, chat messaging, and multi-participant calls. Built using WebRTC technology for peer-to-peer communication, offering high-quality video and audio streaming with a user-friendly interface.",
      image: videoCallingAppLogo,
      tags: ["React JS", "WebRTC", "Socket.io", "Node.js", "Express", "Real-time Communication"],
      github: "https://github.com/Ashutosh1702/Video_Call_App",
      webapp: "https://video-call-app-beryl.vercel.app/",
    },
    {
      id: 2,
      title: "Currency Converter App",
      description:
        "A dynamic currency converter application that provides real-time exchange rates for over 150+ currencies worldwide. Features include historical data visualization, favorite currency pairs, offline support, and beautiful charts. Uses live API data for accurate and up-to-date conversion rates.",
      image: currencyConverterAppLogo,
      tags: ["React JS", "API Integration", "Chart.js", "Local Storage", "Responsive Design"],
      github: "https://github.com/ashutosh/currency-converter",
      webapp: "https://currency-converter-live.netlify.app/",
    },
  ];  