import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/johndoe', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/johndoe', icon: 'github' },
    { name: 'Twitter', href: 'https://twitter.com/johndoe', icon: 'twitter' },
    { name: 'Dribbble', href: 'https://dribbble.com/johndoe', icon: 'dribbble' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'mahaltejapilla08@gmail.com', href: 'mailto:mahaltejapilla08@gmail.com' },
    { icon: Phone, text: '+91 7995447216', href: 'tel:+917995447216' },
    { icon: MapPin, text: 'Hyderabad, India', href: '#' }
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 mb-4">
            <div className="mb-4">
              <h3 className="fs-3 fw-bold mb-3">Mahal Teja</h3>
              <p className="text-white lh-base">
                A passionate frontend developer dedicated to creating beautiful, 
                functional, and user-friendly web experiences. Let's build something amazing together!
              </p>
            </div>

            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-25 h-25 bg-primary rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
                >
                  <i className={`fab fa-${social.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="mb-2"
                >
                  <a
                    href={link.href}
                    className="text-decoration-none text-white d-inline-block"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#fff';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6c757d';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              {contactInfo.map((contact, index) => (
                <li
                  key={contact.text}
                  className="mb-3 d-flex align-items-center gap-2"
                >
                  <contact.icon size={16} className="text-primary" />
                  <a
                    href={contact.href}
                    className="text-decoration-none text-white"
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* Removed newsletter subscription section as requested */}

        </div>

        {/* Bottom Section */}
        <div className="border-top border-secondary pt-4 mt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-white mb-0">
                © {currentYear} Mahal Teja. All rights reserved. Made with{' '}
                <Heart className="d-inline text-danger" size={16} /> by Mahal Teja
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <button
                onClick={scrollToTop}
                className="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-2"
              >
                <ArrowUp size={16} />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 