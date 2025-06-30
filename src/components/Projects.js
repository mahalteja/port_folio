import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Lock, Clock } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [clickedProject, setClickedProject] = useState(null);

  // Check if device is mobile
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const handleProjectInteraction = (projectId) => {
    if (isMobile()) {
      // On mobile, toggle click state
      setClickedProject(clickedProject === projectId ? null : projectId);
    } else {
      // On desktop, set hover state
      setHoveredProject(projectId);
    }
  };

  const handleProjectLeave = () => {
    if (!isMobile()) {
      setHoveredProject(null);
    }
  };

  const shouldShowOverlay = (projectId) => {
    if (isMobile()) {
      return clickedProject === projectId;
    } else {
      return hoveredProject === projectId;
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Property Listing & Management Platform',
      description: 'A comprehensive property listing application similar to NoBroker with additional property management features. Includes property search, listings, user authentication, and management dashboard.',
      image: '🏠',
      category: 'react',
      technologies: ['React', 'Redux Toolkit', 'CSS3', 'JavaScript', 'HTML5', 'CSS Grid', 'Flexbox'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Document Management & E-Signature System',
      description: 'A document management application similar to DocuSign for maintaining, signing, and managing contracts with signature reminders and contract tracking features.',
      image: '📄',
      category: 'react',
      technologies: ['React', 'Redux Toolkit', 'Material-UI', 'CSS3', 'JavaScript', 'HTML5', 'CSS Grid', 'Flexbox'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Netflix GPT',
      description: 'A Netflix-inspired application with AI-powered recommendations and content discovery features, built as a part-time project. Implemented Routing, Redux Store, TailwindCSS, Firebase Authentication, and Memoization, Deepseek API, and more',
      image: '🎬',
      category: 'react',
      technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://netflixgpt-b5fac.web.app/',
      githubUrl: 'https://github.com/mahalteja/netflix-gpt',
      featured: true
    },
    {
      id: 4,
      title: 'EduTech Platform & Dashboard',
      description: 'A comprehensive educational technology platform with live sessions, course materials, and interactive dashboard for students and educators.',
      image: '🎓',
      category: 'react',
      technologies: ['React', 'Redux Toolkit', 'Styled Components', 'CSS3', 'JavaScript', 'HTML5', 'CSS Grid', 'Flexbox'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'SRIM Media Website',
      description: 'A modern static website for SRIM Media with responsive design, showcasing services and portfolio with professional aesthetics.',
      image: '📱',
      category: 'react',
      technologies: ['React', 'CSS3', 'JavaScript', 'HTML5', 'CSS Grid', 'Flexbox', 'Bootstrap'],
      liveUrl: 'https://www.srimmedia.com/',
      githubUrl: 'https://github.com/srimworks/SRIMMEDIA',
      featured: false
    },
    {
      id: 6,
      title: 'SRIM Works Website',
      description: 'A professional static website for SRIM Works featuring company information, services, and portfolio with modern design and responsive layout.',
      image: '💼',
      category: 'react',
      technologies: ['React', 'CSS3', 'JavaScript', 'HTML5', 'CSS Grid', 'Flexbox', 'Bootstrap'],
      liveUrl: 'https://www.srimworks.com/',
      githubUrl: 'https://github.com/srimworks/srimworks',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and the technologies I use
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="col-md-6 col-lg-4"
            >
              <div 
                className={`card h-100 position-relative border-0 shadow-lg ${project.featured ? 'border-primary border-2' : ''}`}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={() => handleProjectInteraction(project.id)}
                onMouseLeave={handleProjectLeave}
                onClick={() => handleProjectInteraction(project.id)}
              >
                {/* Project Image */}
                <div className="position-relative mb-4">
                  <div 
                    className="w-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
                    style={{ 
                      height: '14rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    {/* Background Pattern */}
                    <div 
                      className="position-absolute w-100 h-100"
                      style={{
                        background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        opacity: 0.6
                      }}
                    />
                    
                    {/* Project Icon */}
                    <div 
                      className="position-relative z-1 d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <span className="display-4">{project.image}</span>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div 
                      className="position-absolute top-0 end-0 text-white px-4 py-2 rounded-pill small fw-bold m-3"
                      style={{
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                        boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                        border: '2px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      ⭐ Featured
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center transition-opacity"
                    style={{ 
                      opacity: shouldShowOverlay(project.id) ? 1 : 0,
                      transition: 'all 0.3s ease-in-out',
                      pointerEvents: shouldShowOverlay(project.id) ? 'auto' : 'none',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
                      borderRadius: '20px 20px 0 0',
                      backdropFilter: 'blur(5px)',
                      zIndex: 3
                    }}
                  >
                    <div className="d-flex gap-4">
                      {project.liveUrl !== '#' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center bg-white text-dark rounded-circle shadow-lg"
                          style={{ 
                            width: '3.5rem', 
                            height: '3.5rem',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={22} />
                        </a>
                      ) : (
                        <div
                          className="d-flex align-items-center justify-content-center bg-white text-muted rounded-circle shadow-lg"
                          style={{ 
                            width: '3.5rem', 
                            height: '3.5rem',
                            transition: 'all 0.3s ease',
                            cursor: 'not-allowed'
                          }}
                          title="Coming Soon"
                        >
                          <Clock size={22} />
                        </div>
                      )}
                      {project.githubUrl !== '#' ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center bg-white text-dark rounded-circle shadow-lg"
                          style={{ 
                            width: '3.5rem', 
                            height: '3.5rem',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={22} />
                        </a>
                      ) : (
                        <div
                          className="d-flex align-items-center justify-content-center bg-white text-muted rounded-circle shadow-lg"
                          style={{ 
                            width: '3.5rem', 
                            height: '3.5rem',
                            transition: 'all 0.3s ease',
                            cursor: 'not-allowed'
                          }}
                          title="Private Repository"
                        >
                          <Lock size={22} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="card-body d-flex flex-column p-0 p-md-4">
                  <h3 className="fs-4 fw-bold text-dark mb-3" style={{ lineHeight: '1.3' }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted lh-base mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 small rounded-pill fw-medium"
                        style={{
                          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                          color: '#1976d2',
                          border: '1px solid rgba(25, 118, 210, 0.2)',
                          fontSize: '0.75rem',
                          boxShadow: '0 2px 4px rgba(25, 118, 210, 0.1)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    {project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn d-flex align-items-center justify-content-center gap-2 small flex-fill fw-semibold"
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '12px 20px',
                          color: 'white',
                          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Eye size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <div
                        className="btn d-flex align-items-center justify-content-center gap-2 small flex-fill fw-semibold"
                        style={{
                          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                          border: '2px solid #d0d0d0',
                          borderRadius: '12px',
                          padding: '12px 20px',
                          color: '#666',
                          cursor: 'not-allowed',
                          transition: 'all 0.3s ease'
                        }}
                        title="Coming Soon"
                      >
                        <Clock size={16} />
                        Coming Soon
                      </div>
                    )}
                    {project.githubUrl !== '#' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn d-flex align-items-center justify-content-center gap-2 small flex-fill fw-semibold"
                        style={{
                          background: 'transparent',
                          border: '2px solid #667eea',
                          borderRadius: '12px',
                          padding: '12px 20px',
                          color: '#667eea',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Code size={16} />
                        Code
                      </a>
                    ) : (
                      <div
                        className="btn d-flex align-items-center justify-content-center gap-2 small flex-fill fw-semibold"
                        style={{
                          background: 'transparent',
                          border: '2px solid #d0d0d0',
                          borderRadius: '12px',
                          padding: '12px 20px',
                          color: '#666',
                          cursor: 'not-allowed',
                          transition: 'all 0.3s ease'
                        }}
                        title="Private Repository"
                      >
                        <Lock size={16} />
                        Private
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="bg-light border border-primary rounded-4 p-5">
            <h3 className="fs-4 fw-bold text-dark mb-3">
              Want to see more?
            </h3>
            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              I'm always working on new projects and learning new technologies. 
              Check out my GitHub profile for more of my work and contributions.
            </p>
            <a
              href="https://github.com/mahalteja"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary d-inline-flex align-items-center gap-2"
            >
              <Github size={20} />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 