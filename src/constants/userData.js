import ExpImg from "../assets/Exp.png"
import GitIcon from "../assets/Git.svg";
import VibeImg from "../assets/Vibe.png";
import ReactIcon from "../assets/React.svg";
import TenzorImg from "../assets/Tenzor.png";
import StuddyImg from "../assets/studdy.png"
import ChatAppImg from "../assets/ChatApp.png";
import NodeJsIcon from "../assets/Node.js.svg";
import NextJsIcon from "../assets/Next.js.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import NanoTechImg from "../assets/NanoTech.png";
import PortFolioImg from "../assets/PortFolio.png";
import JavaScriptIcon from "../assets/JavaScript.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";

// import PortfolioImg from "../assets/portfolio.jpeg";
// import TasteTroopImg from "../assets/tastetroop.jpeg";
// import CSSIcon from "../assets/CSS3.svg";
// import HTMLIcon from "../assets/HTML5.svg";
// import BootstrapIcon from "../assets/Bootstrap.svg";
// import GitHubIcon from "../assets/GitHub.svg";

export const userData = {
  name: "Aman Raidas",
  location: "Lucknow, India",
  role: "Web Developer",
  role_desc:
    "Hi, I'm Aman Raidas. A dedicated full-stack professional exploring backend technologies to build robust, full-stack websites.",
  socials: {
    linkedin: "https://www.linkedin.com/in/igamanraj/",
    github: "https://github.com/igamanraj",
    // googleCloud: "https://www.cloudskillsboost.google/public_profiles/72516cdd-38b4-422e-a2bc-fcf66a79013a",
    email: "amanra812727@gmail.com",
    twitter: "https://twitter.com/igamanraj",
    whatsapp: "https://wa.me/+919569321609",
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern technologies that empower me to build highly functional solutions.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "JavaScript",
        type: "Programming Language",
        image: JavaScriptIcon,
      },

      // Frontend Libraries and Frameworks
      {
        id: 3,
        name: "React",
        type: "JavaScript Library",
        image: ReactIcon,
      },
      {
        id: 4,
        name: "Next.js",
        type: "React Framework",
        image: NextJsIcon,
      },

      // Styling and CSS Frameworks
      {
        id: 5,
        name: "Tailwind CSS",
        type: "CSS Framework",
        image: TailwindIcon,
      },

      // Backend and Databases
      {
        id: 6,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: NodeJsIcon,
      },
      {
        id: 7,
        name: "Express",
        type: "Web Framework",
        image: ExpressIcon,
      },
      {
        id: 8,
        name: "MongoDB",
        type: "Database",
        image: MongoDBIcon,
      },

      // Tools and Version Control
      {
        id: 9,
        name: "Git & GitHub",
        type: "Version Control",
        image: GitIcon,
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my academic and profesional experience, shaping my growth in the tech world.",
    exp: [
      {
        id: 1,
        title: "Senior React Developer",
        company: "Tata Consultancy Services",
        location: "Bengaluru, India",
        year: "Jul 2023 - Present",
        role: "Leading a team of frontend developers, I ensure on-time delivery of projects while enhancing security through Microsoft Authentication Library integration and optimizing performance by developing reusable components.",
        // image: TCSImg,
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "Tata Consultancy Services",
        location: "Bengaluru, India",
        year: "Jul 2021 - Jun 2023",
        role: "I developed an admin dashboard to streamline data visualization, significantly reduced turnaround time, and enhanced application performance while creating user-friendly tools and improving engagement through real-time notifications.",
        // image: TCSImg,
      },
    ],
    edu: [
      {
        id: 1,
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "SRM Institute of Science and Technology",
        year: "Jul 2017 - May 2021",
        // image: SRMImg,
      },
    ],
  },
  projectsData: {
    title: "Personal Projects",
    desc: "Code-Powered Designs in Action",
    projects: [
      {
        id: 1,
        name: "Vibe",
        description:"An AI-powered code generation and project management platform built with Next.js, Prisma, and Inngest. It streamlines project workflows by generating code snippets and managing tasks efficiently.",
        image: VibeImg,
        techStack: ["TypeScript", "Next.js", "Prisma", "Inngest", "Tailwind CSS", "Gemini API","E2B", "Vercel"],
        github: "https://github.com/igamanraj/Vibe",
        website: "https://vibe-io.vercel.app",
      },
      {
        id: 2,
        name: "Studdy-Buddy",
        description:
          "A comprehensive educational platform that offers a variety of courses, interactive quizzes, and progress tracking to enhance learning experiences.",
          techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
        image: StuddyImg,
        github: "https://github.com/igamanraj/Studdy-Buddy",
        website: "https://studdybuddy-io.vercel.app",
      },
      {
        id: 3,
        name: "Expense Tracker",
        description: "An A.I. powered expense tracker that helps users manage their finances effectively.",
        techStack: ["Typescript", "Next.js", "Clerk","Neon", "Prisma","Tailwind CSS", "PostgreSQL"],
        image: ExpImg,
        github: "https://github.com/igamanraj/Next-Expense-Tracker-AI",
        website: "https://exptrackerai-io.vercel.app",
      },
      {
        id: 4,
        name: "Portfolio",
        description:
        "A personal portfolio website showcasing my skills, projects, and experience in web development. It features a clean design, responsive layout, and smooth navigation to highlight my work effectively.",
        techStack: ["JavaScript", "React", "CSS", "Github", "Vercel"],
        image: PortFolioImg,
        github: "https://github.com/igamanraj/Portfolio",
        website: "https://naman.codes",
      },
      {
        id: 5,
        name: "Chat App",
        description:
          "A real-time chat application with fast performance, allowing users to upload their images, and send messages.",
        techStack: [
          "JavaScript",
          "Next.js",
          "React Router",
          "Node Js",
          "Express",
          "Socket.io",
          "Render"
        ],
        image: ChatAppImg,
        github: "https://github.com/igamanraj/Chat-Web-App",
        website: "https://chatapp-io.vercel.app/",
      },
      {
        id: 6,
        name: "Tenzor",
        description: "A simple and interactive AI-Powered Calculator that can perform basic tasks with also advanced tasks like you can draw a picture and it will tell you what it is.",
        techStack: ["TypeScript", "React", "Tailwind CSS", "Python", "Gemini Api", "Flask", "Render"],
        image: TenzorImg,
        github: "https://github.com/igamanraj/Tenzor",
        website: "https://tenzor-io.vercel.app",
      },
      {
        id: 7,
        name: "Mern - NanoTech",
        description: "A MERN stack application featuring a user-friendly interface, secure google authentication, and a comprehensive admin dashboard for managing users and admin functionalities.",
        techStack: ["JavaScript", "React", "Tailwind CSS", "Firebase", "Node.js", "Express", "MongoDB"],
        image: NanoTechImg,
        github: "https://github.com/igamanraj/MERN",
        website: "https://nanotech-pi.vercel.app/",
      },
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Send me a message",
    subTitle: "Let's code your vision together.",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
    twitter : "Twitter",
  },
};
