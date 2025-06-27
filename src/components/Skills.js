import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Settings, Star, Grid } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiMui,
  SiBootstrap,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const getLevelLabel = (level) => {
  if (level >= 91) return "Expert";
  if (level >= 65) return "Professional";
  if (level >= 40) return "Intermediate";
  return "Basic";
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 90, color: "#61DAFB", icon: SiReact, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "Netflix GPT", "SRIM Media/Works"] },
        { name: "JavaScript (ES6+)", level: 85, color: "#F7DF1E", icon: SiJavascript, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "Netflix GPT", "SRIM Media/Works"] },
        { name: "HTML5", level: 95, color: "#E34F26", icon: SiHtml5, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "Netflix GPT", "SRIM Media/Works"] },
        { name: "CSS3", level: 90, color: "#1572B6", icon: SiCss3, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "SRIM Media/Works"] },
        { name: "Redux Toolkit", level: 60, color: "#764ABC", icon: SiRedux, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "Netflix GPT"] },
        { name: "CSS Grid & Flexbox", level: 95, color: "#1572B6", icon: Grid, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "SRIM Media/Works"] },
      ],
    },
    {
      category: "Styling & UI",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 85, color: "#06B6D4", icon: SiTailwindcss, projects: ["Netflix GPT"] },
        { name: "Styled Components", level: 60, color: "#DB7093", icon: SiStyledcomponents, projects: ["EduTech Dashboard"] },
        { name: "Material-UI", level: 75, color: "#0081CB", icon: SiMui, projects: ["Document Management App"] },
        { name: "Bootstrap", level: 85, color: "#7952B3", icon: SiBootstrap, projects: ["SRIM Media/Works"] },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", level: 85, color: "#F05032", icon: SiGithub, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "Netflix GPT", "SRIM Media/Works"] },
        { name: "VS Code", level: 90, color: "#007ACC", icon: VscVscode, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "Netflix GPT", "SRIM Media/Works"] },
        { name: "Figma", level: 70, color: "#F24E1E", icon: SiFigma, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard", "SRIM Media/Works"] },
        { name: "Postman", level: 75, color: "#FF6C37", icon: SiPostman, projects: ["Property Listing App", "Document Management App", "EduTech Dashboard"] },
      ],
    },
  ];

  const projects = [
    {
      name: "Property Listing App",
      description: "App similar to NoBroker for property management",
      tech: ["React.js", "CSS3", "JavaScript", "Redux Toolkit", "HTML5", "GitHub", "VS Code", "Figma", "Postman", "CSS Grid & Flexbox"],
    },
    {
      name: "Document Management App",
      description: "App like DocuSign for contracts and documents",
      tech: ["React.js", "CSS3", "JavaScript", "Redux Toolkit", "HTML5", "GitHub", "VS Code", "Figma", "Postman", "Material-UI", "CSS Grid & Flexbox"],
    },
    {
      name: "EduTech Dashboard",
      description: "Edtech dashboard for classes and materials",
      tech: ["React.js", "CSS3", "JavaScript", "Redux Toolkit", "HTML5", "GitHub", "VS Code", "Figma", "Postman", "Styled Components", "CSS Grid & Flexbox"],
    },
    {
      name: "Netflix GPT",
      description: "Netflix-like app using GPT & modern stack",
      tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux Toolkit", "VS Code", "Git & GitHub"],
    },
    {
      name: "SRIM Media/Works",
      description: "Static websites for SRIM Media and SRIM Works",
      tech: ["React.js", "CSS3", "JavaScript", "HTML5", "GitHub", "VS Code", "Figma", "CSS Grid & Flexbox", "Bootstrap"],
    },
  ];

  // Flatten all skills into a single array for card rendering
  const allSkills = skillCategories.flatMap(category => category.skills.map(skill => ({
    ...skill,
    category: category.category,
    categoryIcon: category.icon,
  })));

  return (
    <section id="skills" className="section py-5">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-muted">My technical skills and the projects where I've applied them</p>
        </motion.div>

        {/* Grid of individual skill cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {allSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <div className="col" key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="card border-0 bg-light h-100 shadow-sm rounded-4 card-body p-4 d-flex flex-column position-relative"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)';
                    e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)';
                  }}
                >
                  <div className="card-body  p-md-2 p-0 d-flex flex-column ">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="me-3 rounded-circle d-flex align-items-center justify-content-center position-relative"
                        style={{ 
                          width: 56, 
                          height: 56, 
                          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}25)`,
                          border: `2px solid ${skill.color}40`,
                          boxShadow: `0 4px 12px ${skill.color}30, inset 0 1px 0 ${skill.color}20`,
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = `0 6px 20px ${skill.color}40, inset 0 1px 0 ${skill.color}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = `0 4px 12px ${skill.color}30, inset 0 1px 0 ${skill.color}20`;
                        }}
                      >
                        <div
                          style={{
                            color: skill.color,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <SkillIcon size={28} style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }} />
                        </div>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0 text-dark">{skill.name}</h6>
                        <small className="text-muted">{skill.category}</small>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="small text-muted">Level: </span>
                      <span className="fw-bold text-primary small">{getLevelLabel(skill.level)}</span>
                    </div>
                    <div className="progress mb-3" style={{ height: "8px", borderRadius: "8px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: '#6f42c1',
                          boxShadow: '0 2px 6px #6f42c155',
                        }}
                        role="progressbar"
                      ></div>
                    </div>
                    <div className="mt-auto">
                      <small className="text-dark">Used in:</small>
                      <div className="mt-1 d-flex flex-wrap gap-1">
                        {skill.projects.map((project) => (
                          <span key={project} className="badge bg-white text-secondary border border-dark small">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-5"
        >
          <div className="card border-0 shadow-sm rounded-4 bg-white">
            <div className="card-body p-0 p-md-4">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40 }}>
                  <Star className="text-white" size={20} />
                </div>
                <h5 className="mb-0 fw-bold">Project Experience</h5>
              </div>
              <div className="row g-4">
                {projects.map((project, index) => (
                  <ProjectExperienceCard key={project.name} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectExperienceCard = ({ project, index }) => {
  const [showMore, setShowMore] = useState(false);
  const techToShow = showMore ? project.tech : project.tech.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
      className="col-12 col-md-6 col-lg-4"
    >
      <div className="card border-0 bg-light h-100 shadow-sm rounded-4">
        <div className="card-body p-md-3 p-0 d-flex flex-column">
          <h6 className="fw-bold text-dark mb-2">{project.name}</h6>
          <p className="text-muted small mb-3 flex-grow-1">{project.description}</p>
          <div className="d-flex flex-wrap gap-1 mb-2">
            {techToShow.map((tech) => (
              <span key={tech} className="badge bg-primary bg-opacity-10 text-white small border border-primary-subtle">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="btn btn-link btn-sm text-decoration-none text-primary"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
