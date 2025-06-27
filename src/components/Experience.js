import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  MapPin, Building, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Professional Experience from resume
  const workExperience = [
    {
      id: 1,
      title: 'Software Engineer | Frontend Developer',
      company: 'SRIM Works',
      location: 'Remote',
      period: 'Oct 2023 – Present',
      description: 'Developed and optimized React.js applications, improving performance by 30% through lazy loading and code splitting. Built and maintained an edutech platform and a real estate property listing/management platform. Integrated RESTful APIs, implemented Context API and Redux for scalable state management, and designed modern, accessible UI components.',
      achievements: [
        'Improved React.js app performance by 30% (lazy loading, code splitting)',
        'Built edutech and property management platforms from scratch',
        'Integrated RESTful APIs for real-time updates',
        'Implemented Context API and Redux for scalable state',
        'Designed modern, accessible UI with animations',
        'Ensured cross-browser compatibility and mobile-first design',
        'Collaborated in Agile teams using Git for version control',
      ],
      technologies: ['React.js', 'JavaScript (ES6+)', 'Redux Toolkit', 'Context API', 'HTML5', 'CSS3', 'RESTful APIs', 'Git', 'Figma'],
    },
    {
      id: 2,
      title: 'UI/UX Developer ',
      company: 'XROS Fellowship',
      location: 'Remote',
      period: 'Apr 2023 – Aug 2023',
      description: 'Designed high-fidelity UI/UX prototypes in Figma and developed responsive, interactive web pages using HTML, CSS, and JavaScript. Collaborated with developers to implement user-friendly UI components.',
      achievements: [
        'Designed high-fidelity UI/UX prototypes in Figma',
        'Developed responsive, interactive web pages',
        'Collaborated with developers for user-friendly UI',
      ],
      technologies: ['Figma', 'HTML5', 'CSS3', 'JavaScript'],
    },
  ];

  // Education from resume
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology (B.Tech)',
      school: 'Aditya Engineering College',
      location: 'Surampalem',
      period: '2021 – 2024',
      description: 'Relevant Coursework: Data Structures & Algorithms, Web Development, Software Engineering. Extracurricular: Coding Club, UI/UX Design Community.',
      achievements: [
        'Member of Coding Club and UI/UX Design Community',
        'Completed projects in DSA and web development',
      ],
    },
  ];

  // Certifications from resume
  const certifications = [
    {
      id: 1,
      name: 'UX Design Specialization',
      issuer: 'Coursera',
      date: '',
      description: '',
    },
    {
      id: 2,
      name: 'Frontend Development Bootcamp',
      issuer: 'Udemy',
      date: '',
      description: '',
    },
    {
      id: 3,
      name: 'IT Specialist Python Certification',
      issuer: '',
      date: '',
      description: '',
    },
  ];

  return (
    <section id="experience" className="experience-section px-4">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="section-title mb-2">Experience & Education</h2>
          <p className="section-subtitle mb-0">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Vertical Layout: Work Experience, then Education, then Certifications */}
        <div className="vertical-experience-edu-layout mx-auto" style={{ maxWidth: 900 }}>
          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5"
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="w-25 h-25 bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                <Building className="text-white" size={24} />
              </div>
              <h3 className="fs-2 fw-bold text-dark mb-0">Work Experience</h3>
            </div>
            <div className="timeline position-relative">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="timeline-card d-flex align-items-start gap-4 mb-5 position-relative"
                >
                  {/* Timeline Dot & Line */}
                  
                  {/* Card Content */}
                  <div className="experience-card flex-grow-1 p-4 shadow-custom-lg">
                    <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                      <h4 className="fs-5 fw-bold text-dark mb-0">{job.title}</h4>
                      <span className="badge bg-light text-primary border border-primary-subtle fw-semibold px-3 py-2" style={{ fontSize: '1rem' }}>{job.period}</span>
                    </div>
                    <div className="d-flex align-items-center gap-3 text-muted mb-2 flex-wrap">
                      <span className="d-flex align-items-center gap-1"><Building size={16} /> {job.company}</span>
                      <span className="d-flex align-items-center gap-1"><MapPin size={16} /> {job.location}</span>
                    </div>
                    <p className="text-muted lh-base mb-3">{job.description}</p>
                    <div className="mb-3">
                      <h5 className="fw-semibold text-dark mb-2">Key Achievements</h5>
                      <ul className="experience-achievement-list">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>
                            <span className="experience-achievement-dot"></span>
                            <span className="small text-muted">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge bg-primary bg-opacity-10 text-white small border border-primary-subtle fw-medium"
                          style={{ letterSpacing: '0.02em' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-5"
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="w-25 h-25 bg-gradient-accent rounded-circle d-flex align-items-center justify-content-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="fs-2 fw-bold text-dark mb-0">Education</h3>
            </div>
            <div className="d-grid gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="education-card p-4 shadow-custom-lg"
                >
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    <h4 className="fs-5 fw-bold text-dark mb-0">{edu.degree}</h4>
                    <span className="badge bg-light text-primary border border-primary-subtle fw-semibold px-3 py-2" style={{ fontSize: '1rem' }}>{edu.period}</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 text-muted mb-2 flex-wrap">
                    <span className="d-flex align-items-center gap-1"><Building size={16} /> {edu.school}</span>
                    <span className="d-flex align-items-center gap-1"><MapPin size={16} /> {edu.location}</span>
                  </div>
                  <p className="text-muted lh-base mb-3">{edu.description}</p>
                  <div>
                    <h5 className="fw-semibold text-dark mb-2">Achievements</h5>
                    <ul className="experience-achievement-list">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <span className="experience-achievement-dot"></span>
                          <span className="small text-muted">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-2"
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="w-25 h-25 bg-gradient-secondary rounded-circle d-flex align-items-center justify-content-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="fs-2 fw-bold text-dark mb-0">Certifications</h3>
            </div>
            <div className="d-grid gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="certification-card d-flex align-items-start gap-4 p-3 shadow-custom"
                >
                  <div className="w-25 h-25 bg-gradient-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="fw-bold text-dark mb-1">{cert.name}</h4>
                    <div className="d-flex align-items-center gap-4 text-muted mb-2 flex-wrap">
                      <span className="fw-medium">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    {cert.description && <p className="text-muted small mb-0">{cert.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 