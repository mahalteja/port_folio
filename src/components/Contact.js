import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_API_URL);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data)
    setIsLoading(false);

    if (data.success) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      console.log("Error", data);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mahaltejapilla08@gmail.com',
      link: 'mailto:mahaltejapilla08@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7995447216',
      link: 'tel:+917995447216'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mahal-teja-006556248/',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mahalteja',
      icon: 'github'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mahal_teja_',
      icon: 'twitter'
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/mahalteja',
      icon: 'behance'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="card h-100">
              <div className="card-body p-0 p-md-4">
                <h3 className="fs-3 fw-bold text-dark mb-4">Let's Connect</h3>
                <p className="text-muted lh-base mb-5">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and design.
                </p>

                <div className="d-grid gap-4 mb-5">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="d-flex align-items-center gap-3"
                    >
                      <div className="w-25 h-25 bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h5 className="fw-semibold text-dark mb-1">{info.title}</h5>
                        <a 
                          href={info.link} 
                          className="text-decoration-none text-muted"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="fw-semibold text-dark mb-3">Follow Me</h5>
                  <div className="d-flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-25 h-25 bg-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
                      >
                        <i className={`fab fa-${social.icon} text-primary fs-5`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body p-0 p-md-4">
                <h3 className="fs-3 fw-bold text-dark mb-4">Send Message</h3>
                
                <form onSubmit={onSubmit} autoComplete="off">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold text-dark">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold text-dark">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold text-dark">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold text-dark">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="form-control"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>

                  <div className="d-grid mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center justify-content-center gap-2 fw-semibold"
                      disabled={isLoading}
                      style={{ minHeight: '44px' }}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span className="ms-2">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 