import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { userData } from "../../constants/userData";
import "./Home.css";

const Home = () => {
  const letters = userData.role.split("");

  return (
    <div className="home" id="home">
      <div className="grid-mask"></div>
      <div className="home-content">
        <div className="home-content-text">
          <div className="location">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
            >
              Based In {userData.location.toUpperCase()}
            </motion.p>
          </div>
          <div className="title">
            {letters.map((letter, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="title-letter"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.h1>
            ))}
          </div>
          <div className="sub-title">
            <p>{userData.role_desc}</p>
          </div>
        </div>
        <div className="home-content-buttons">
          <a href="#projects" className="primary-button">
            See My Projects <ChevronRightIcon className="btn-icon" />
          </a>
          <a
            className="secondary-button"
            href="/Resume_Portfolio.pdf"
            target="_blank"
            aria-label="Resume"
            rel="noopener noreferrer"
          >
            Download Resume <FileDownloadIcon className="btn-icon" />
          </a>
        </div>
        <div className="home-content-links">
          <motion.a
            className="gmail"
            href="mailto:rkm.rahulkmishra@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <EmailIcon className="gmail-icon social-icon" />
          </motion.a>
          <motion.a
            className="github"
            href="https://github.com/TheCyberAtom"
            aria-label="github profile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <GitHubIcon className="github-icon social-icon" />
          </motion.a>
          <motion.a
            className="linkedin"
            href="https://www.linkedin.com/in/thecyberatom/"
            aria-label="github profile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <LinkedInIcon className="linkedin-icon social-icon" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Home;
