import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-custom' : 'bg-transparent'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="container  ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="navbar-brand text-warning fw-bold fs-3 mx-6"
        >
          Mahal Teja
        </motion.div>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link text-dark fw-medium me-3 ${scrolled ? 'text-dark' : 'text-white'}`}
                  style={{ border: 'none', background: 'none' }}
                >
                  {item.name}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-2 py-3 d-lg-none w-100"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="container">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <motion.button
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="nav-link text-dark fw-medium text-center w-100"
                    style={{ border: 'none', background: 'none' }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 