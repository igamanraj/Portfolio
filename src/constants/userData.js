import ChatAppImg from "../assets/ChatApp.png";
import NanoTechImg from "../assets/NanoTech.png";
import PortFolioImg from "../assets/PortFolio.png";
// import PortfolioImg from "../assets/portfolio.jpeg";
// import TasteTroopImg from "../assets/tastetroop.jpeg";
import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
// import HTMLIcon from "../assets/HTML5.svg";
// import CSSIcon from "../assets/CSS3.svg";
// import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import GitIcon from "../assets/Git.svg";
// import GitHubIcon from "../assets/GitHub.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";

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
        name: "Chat App",
        description:
          "A real-time chat application with fast performance, allowing users to upload their images, and send messages.",
        techStack: [
          "JavaScript",
          "React",
          "React Router",
          "Node Js",
          "Express",
          "Socket.io",
          "Render"
        ],
        image: ChatAppImg,
        github: "https://github.com/igamanraj/Chat-Web-App",
        website: "https://chat-app-tan-zeta.vercel.app/",
      },
      {
        id: 2,
        name: "Mern - NanoTech",
        description: "A MERN stack application featuring a user-friendly interface, secure google authentication, and a comprehensive admin dashboard for managing users and admin functionalities.",
        techStack: ["JavaScript", "React", "Tailwind CSS", "Firebase", "Node.js", "Express", "MongoDB"],
        image: NanoTechImg,
        github: "https://github.com/igamanraj/MERN",
        website: "https://nanotech-pi.vercel.app/",
      },
      {
        id: 3,
        name: "Portfolio",
        description:
          "A personal portfolio website showcasing my skills, projects, and experience in web development.",
        techStack: ["JavaScript", "React", "CSS", "Github", "Vercel"],
        image: PortFolioImg,
        github: "https://github.com/igamanraj/Portfolio",
        website: "https://naman.codes",
      }
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
