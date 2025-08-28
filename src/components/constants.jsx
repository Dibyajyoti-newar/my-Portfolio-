// Skills Section Logo's//
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import sassLogo from '../assets/tech_logo/sass.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import angularLogo from '../assets/tech_logo/angular.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import nextjsLogo from '../assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import gsapLogo from '../assets/tech_logo/gsap.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import springbootLogo from '../assets/tech_logo/springboot.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import mcLogo from '../assets/tech_logo/mc.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import postgreLogo from '../assets/tech_logo/postgre.png';
import csharpLogo from '../assets/tech_logo/csharp.png';

import aiPestLogo from '../assets/company-logo/aiPest.png';
import PWLogo from '../assets/Certification-logo/PWimg.png';
import UdemyLogo from '../assets/Certification-logo/Udemyimg.jpg';
import NITSilcharLogo from '../assets/education-logo/NITSilcharimg.jpg';
import ggewLogo from '../assets/education-logo/ggewimg.png';
import allenLogo from '../assets/education-logo/allenimg.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      
      { name: 'Vercel', logo: vercelLogo },
      
      
    ],
  },
];
export const experiences = [
    {
      id: 0,
      img: aiPestLogo,
      role: "Fullstack Developer",
      company: "NIT Silchar",
      date: "May 2025 - July 2025",
      desc: "we developed an AI-Powered Pest Detection & Prevention System using React.js, TensorFlow/PyTorch, and Firebase. The platform enables farmers to upload plant images, detect pests with 92% accuracy, and receive optimal treatment suggestions. It features an interactive frontend with real-time expert chat and a secure backend built with Flask/FastAPI integrated with Firebase.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "Firebase",
        "Flask",
        " Next Js",
      ],
    },
    {
      id: 0,
      img: aiPestLogo,
      role: "Fullstack Developer",
      company: "NIT Silchar",
      date: "May 2025 - July 2025",
      desc: "we developed an AI-Powered Pest Detection & Prevention System using React.js, TensorFlow/PyTorch, and Firebase. The platform enables farmers to upload plant images, detect pests with 92% accuracy, and receive optimal treatment suggestions. It features an interactive frontend with real-time expert chat and a secure backend built with Flask/FastAPI integrated with Firebase.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "Firebase",
        "Flask",
        " Next Js",
      ],
    },
  ];
  export const certifications = [
  {
    id: 0,
    img: UdemyLogo, // logo of the platform or course thumbnail
    title: "Master Spring Boot 3 & Spring Framework 6 with Java",
    platform: "Udemy",
    date: "Jan 2025",
    desc: "Completed a comprehensive course covering Spring Framework, Spring Boot, Spring Data, Docker & AWS.",
    link: "https://www.udemy.com/certificate/example" // optional certificate link
  },
  {
    id: 1,
    img: PWLogo,
    title: "Java with DSA and system design 2.0",
    platform: "PW Skills",
    date: "Mar 2025",
    desc: "Learned Java, DSA, System Design basics.",
    link: "https://drive.google.com/file/d/1Mpjk08spZQ3h7PTIicpB0WSr40pMfNh6/view"
  },
  ];
  export const projects = [
    {
      id: 0,
      title: "Event Aggregator for College Students",
      description:
        "Built a cross-college event aggregator platform for hackathons, fests, and workshops with seamless discovery and registrations. Developed the frontend in React.js, backend REST APIs in Spring Boot, and integrated Firebase Firestore for cloud storage.",
      
      tags: ["HTML", "CSS", "JavaScript", "React JS", "RestAPI","Firebase", "Springboot"],
      github: "https://github.com/Dibyajyoti-newar/Event-Hub",
      webapp: "fd",
    },
    {
      id: 1,
      title: "Realtime Collaborative Code Editor",
      description:
        "Developed a real-time collaborative code editor enabling multi-user code synchronization with Socket.io. Enhanced the coding experience using CodeMirror for syntax highlighting, autocomplete, and bracket matching, with backend execution support in Node.js.",
      
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dibyajyoti-newar/Realtime-Code-Editor",
      webapp: "",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "Created a responsive personal portfolio website using React.js, HTML, CSS, and GSAP, featuring smooth animations and optimized performance across devices. Implemented section-based navigation and an interactive contact form to showcase projects and skills effectively.",
      
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dibyajyoti-newar/my-Portfolio-",
      webapp: "",
    },
  ];
   export const education = [
    {
      id: 0,
      img:NITSilcharLogo,
      school: "National Institute of Technology, Silchar",
      date: "Sept 2022 - July 2026 (Expected)",
      grade: "6.98 CGPA",
      desc: "I am a 4th-year B.Tech student at NIT Silchar, specializing in Electronics and Communication Engineering. Beyond my academics, I am enthusiastic towards software development, AI/ML, and full-stack web technologies. I have worked on projects like an AI-Powered Pest Detection System, Event Aggregator Platform, and a Realtime Collaborative Code Editor, which allowed me to apply concepts of React.js, Node.js, TensorFlow, Firebase, and Spring Boot in real-world solutions. I enjoy competitive programming, exploring new technologies, and engaging in sports like badminton, football, and cricket, which keep me motivated and collaborative.",
      degree: "Bachelor of Technology - Electronics and Communication Engineering (B.Tech)",
    },
    {
      id: 1,
      img:allenLogo,
      school: "Allen Carrier Institute, Guwahati(cotching)",
      date: "Sept 2021 - jun 2022",
      grade:"N/A",
      desc: "I completed my JEE coaching at Allen, Guwahati, where I strengthened my fundamentals in mathematics, physics, and chemistry.",
      degree: "Cotching for JEE Mains and Advanced",
    },
    {
      id: 2,
      img:ggewLogo,
      school: "Gurukul Group of Educational Wings, Mandaldoi",
      date: "Apr 2019 - March 2021",
      grade: "90.8%",
      desc: "I completed my class 12 education from Gurukul Group of Educational Wings, Mandaldoi, under the SEBA board, where I studied Physics, Chemistry and Mathematics (PCM) with Biology.",
      degree: "SEBA(XI & XII)",
    },
    {
      id: 3,
      
      school: "Sankerdev Jatiya Vidyalaya, Dalogghat",
      date: "Apr 2008 - March 2018",
      grade: "80.5%",
      desc: "I completed my class 1 to 10 education from Sankerdev Jatiya Vidyalaya, Dalogghat, under the SEBA board.",
      degree: "SEBA(I to X)",
    },
  ];
