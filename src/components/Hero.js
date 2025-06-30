import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Code, Palette, Zap,} from 'lucide-react';
import resumePDF from './utils/Mahal_Teja.pdf';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  const roles = [
    'Frontend Developer',
    'UI/UX Designer', 
    'React Developer',
    'Web Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating stunning user interfaces'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency'
    }
  ];

  return (
    <section 
      id="home" 
      className="section position-relative overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <motion.div 
            className="col-lg-6 mt-5 mt-sm-0 text-center text-lg-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="badge bg-light text-primary fs-6 px-3 py-2 mb-3">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="display-3 fw-bold text-white mb-4"
              style={{ lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Hi, I'm{' '}
              <span className="text-warning">Mahal Teja</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <h2 className="h2 text-light mb-0">
                I'm a{' '}
                <span 
                  className="text-warning fw-bold"
                  role="status"
                  aria-live="polite"
                  aria-label={`Current role: ${roles[currentText]}`}
                >
                  {roles[currentText]}
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="lead text-light mb-5"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
             Passionate about creating exceptional digital experiences through innovative design and clean, efficient code. I'm a pixel-perfect UI developer who sweats the small details — let's build something amazing together!
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <motion.button
                className="btn btn-warning btn-lg d-inline-flex align-items-center gap-2 px-4 py-3 fw-semibold"
                onClick={() => scrollToSection('contact')}
                onKeyDown={(e) => handleKeyDown(e, 'contact')}
                aria-label="Get in touch - navigate to contact section"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail size={20} aria-hidden="true" />
                Get In Touch
                <ArrowRight size={18} aria-hidden="true" />
              </motion.button>

              <motion.button
                className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2 px-4 py-3 fw-semibold"
                onClick={() => scrollToSection('projects')}
                onKeyDown={(e) => handleKeyDown(e, 'projects')}
                aria-label="View projects - navigate to projects section"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Code size={20} aria-hidden="true" />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="d-grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="card border-0 bg-white bg-opacity-10 backdrop-blur-sm"
                  style={{ backdropFilter: 'blur(10px)' }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.2, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-25 h-25 bg-warning rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                        <highlight.icon className="text-dark" size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="h5 fw-bold text-white mb-1">{highlight.title}</h3>
                        <p className="text-light mb-0 small">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
                {/* Download Resume Button */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  <motion.a
                    href={resumePDF}
                    download="Mahal_Teja_Resume.pdf"
                    className="btn btn-outline-warning btn-lg d-inline-flex align-items-center gap-2 px-4 py-3 fw-semibold"
                    aria-label="Download resume"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7,10 12,15 17,10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                  </motion.a>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 