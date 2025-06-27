import React from "react";
import { Code, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, number: "10+", suffix: "+", label: "Tech Stack Used" },
    {
      icon: Users,
      number: "5+",
      suffix: "+",
      label: "Client Projects Delivered",
    },
    { icon: Award, number: "1.5+", suffix: "", label: "Years of Experience" },
    { icon: Clock, number: "500+", suffix: "+", label: "Hours Coded" },
  ];

  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate frontend developer dedicated to creating exceptional user
            experiences
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Column - Image and Stats */}
          <div className="col-lg-6">
            {/* Profile Image */}
            <div className="text-center mb-5">
              <div className="position-relative d-inline-block">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary rounded-circle opacity-25"
                  style={{ filter: "blur(1rem)" }}
                ></div>
                <div
                  className="position-relative bg-gradient-primary rounded-circle p-2"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <div className="w-100 h-100 bg-white rounded-circle d-flex align-items-center justify-content-center">
                    <div className="display-1 text-gradient-primary">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="col-6 text-center"
                >
                  <div className="w-25 h-25 mx-auto mb-3 bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                    <stat.icon className="text-white" size={32} />
                  </div>
                  <div className="fs-2 fw-bold text-dark mb-1">
                    {stat.number}
                  </div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6">
            <div className="my-4">
              <h3 className="fs-1 fw-bold text-dark mb-4">
                Turning Ideas Into Reality
              </h3>
              <p className="text-muted lh-base mb-4">
                I'm a passionate frontend developer with 1.5 years of experience
                in creating beautiful, functional, and user-friendly web
                applications. My journey in web development started with a
                curiosity about how websites work, which quickly evolved into a
                deep passion for creating exceptional digital experiences.
              </p>
              <p className="text-muted lh-base mb-4">
                I specialize in React.js, modern JavaScript (ES6+), and
                responsive design. My approach combines technical expertise with
                a keen eye for design, ensuring that every project I work on is
                not only functional but also visually appealing and accessible
                to all users.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fs-3 fw-semibold text-dark mb-3">
                What I Do Best:
              </h4>
              <div className="d-grid gap-1">
                {[
                  "Building responsive and accessible web applications",
                  "Creating smooth, interactive user interfaces",
                  "Designing pixel-perfect UIs with attention to every detail",
                  "Optimizing performance and user experience",
                  "Collaborating with designers and backend developers",
                  "Staying up-to-date with the latest web technologies",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="d-flex align-items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-circle"></div>
                    <span className="text-muted">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
