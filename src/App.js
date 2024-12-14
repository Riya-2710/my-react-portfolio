import './App.css';
import React, { useState, useEffect } from 'react';
import { FaBuilding, FaCalendarAlt, FaBriefcase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaNodeJs, FaGit, FaGithub, FaDocker, FaAws, FaServer, FaKey, FaShieldAlt, FaLock } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMysql, SiMongodb, SiExpress, SiNginx } from 'react-icons/si';
import { GiStethoscope } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <ContactMe />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Tech Skills</a></li>
        <li><a href="#work-experience">Work Experience</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <div className="profile-container">
          <img src="image2.webp" alt="Riya Sadhwani" className="profile-img" />
        </div>
        <h1>Hi, I'm <span className="highlight">Riya Sadhwani</span></h1>
        <p className="rotating-text">
          <span>Full Stack Developer</span>
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/riyasadhwani" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Riya-2710/Riya-2710.git" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/riya_._sadhwani" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="mailto:riyasadhwani2710@gmail.com"><i className="fas fa-envelope"></i></a>
          <a href="tel:+18078420430"><i className="fas fa-phone"></i></a>
        </div>
        <a href="./resume.pdf" download className="btn-download">Download Resume</a>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p className="typewriter">
            Hi there! I'm <span className="highlight">Riya Sadhwani</span>, a passionate Full Stack Developer who loves crafting beautiful, functional, and dynamic web applications.
          </p>
          <div className="fun-facts">
            <p className="hover-reveal">Hover over me for a fun fact! 🧩</p>
            <p className="hidden-fact">I can solve a Rubik's cube in under 2 minutes!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { category: 'Front-End', icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <FaBootstrap />], label: 'HTML5, CSS3, JavaScript, React.js, Bootstrap' },
    { category: 'Back-End', icons: [<FaPython />, <SiDjango />, <FaNodeJs />, <SiExpress />], label: 'Python, Django, Node.js, Express.js' },
    { category: 'Databases', icons: [<SiPostgresql />, <SiMysql />, <SiMongodb />], label: 'SQL (PostgreSQL) ,MySQL, NoSQL (MongoDB)' },
    { category: 'APIs', icons: [<FaServer />, <FaServer />], label: 'RESTful APIs, JSON' },
    { category: 'Version Control', icons: [<FaGit />, <FaGithub />], label: 'Git, GitHub, CI/CD Pipelines' },
    { category: 'Web Servers & Deployment', icons: [<SiNginx />, <FaDocker />, <FaAws />], label: 'NGINX, Docker, AWS' },
    { category: 'Security', icons: [<GiStethoscope />, <FaKey />, <FaShieldAlt />, <FaLock />], label: 'OAuth2, JWT, CSRF, Encryption' }
  ];


  return (
    <section className="technical-skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skills-category">
            <h3>{skill.category}</h3>
            <div className="skills-icons">
              {skill.icons.map((icon, i) => (
                <div key={i} className="skill-icon">
                  {icon}
                  <span className="skill-label">{skill.label.split(',')[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkExperience() {
  const experiences = [
    {
      position: 'Full-Stack Developer',
      company: 'ABC',
      duration: 'October 2024 - Present',
      description: ''
    },
    {
      position: 'Software Engineer',
      company: 'XYZ',
      duration: 'May 2023 - July 2024',
      description: '',
    }
  ];

  return (
    <section className="work-experience" id="work-experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4>
                <FaBuilding className="icon" /> {exp.company}
              </h4>
              <p className="duration">
                <FaCalendarAlt className="icon" /> {exp.duration}
              </p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactMe() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Contact No.</label>
        <input type="tel" name="contact" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default App;
