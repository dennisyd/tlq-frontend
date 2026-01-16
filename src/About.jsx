import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import martineDennis from "./assets/martine-dennis.jpg";
import logo from "./assets/logo.png";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`about-page ${visible ? "visible" : ""}`}>
      <header className="top-nav">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="TLQ Learning Quarters" className="logo-img" />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/our-approach">Our Approach</Link>
          <a href="/#tutors">Our Tutors</a>
          <a href="/#subjects">Subjects</a>
          <a href="/#testimonials">Testimonials</a>
        </nav>
        <a className="button button-primary" href="/#consultation">
          Get Started
        </a>
      </header>

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            Empowering Youth to Reach
            <br />
            Their Highest Potential
          </h1>
          <p className="tagline">Building Minds, Shaping Futures.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>About The Learning Quarters</h2>
          <p>
            We believe every student has the potential to excel academically,
            financially, and personally. Our mission is to empower youth to
            reach their highest potential through personalized instruction,
            expert mentorship, and real-world skill development.
          </p>
        </div>
      </section>

      <section className="about-founder">
        <div className="founder-container">
          <div className="founder-image">
            <img src={martineDennis} alt="Martine Dennis, CEO and Founder" />
          </div>
          <div className="founder-bio">
            <h2>Meet Our Founder</h2>
            <h3>Martine Dennis</h3>
            <p className="founder-title">
              CEO & Founder | M.S., Applied Mathematics
            </p>
            <p>
              Our CEO and Founder, Martine Dennis, is an accomplished Math
              Analyst, math educator, financial literacy coach, and author. The
              Learning Quarters combines academic excellence with practical life
              skills under her leadership.
            </p>
            <p>
              Martine is the author of <em>Your SAT Companion Book</em> and the
              Amazon #1 bestselling{" "}
              <em>
                Secure the Bag: Lessons That Should've Been Taught in Public
                Schools
              </em>
              , and she mentors students in financial literacy and stock market
              investing.
            </p>
            <ul className="founder-credentials">
              <li>Teacher of the Year</li>
              <li>Financial Literacy Coach</li>
              <li>SAT & Test Prep Educator</li>
              <li>Stock Market Investment Coach & Mentor</li>
              <li>
                Author of <em>Your SAT Companion Book</em>
              </li>
              <li>
                Author of Amazon #1 Best Seller{" "}
                <em>Secure the Bag: Lessons That Should've Been Taught in Public Schools</em>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="who-we-serve">
        <h2>Who We Serve</h2>
        <p className="section-intro">
          We work with students from Grade 1 through graduate school, offering:
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h4>Academic Tutoring</h4>
            <p>Personalized instruction for all grade levels</p>
          </div>
          <div className="service-item">
            <h4>Test Preparation</h4>
            <p>SAT, ACT, and college entrance exam prep</p>
          </div>
          <div className="service-item">
            <h4>Special Education Support</h4>
            <p>IEP-informed instruction and accommodations</p>
          </div>
          <div className="service-item">
            <h4>Financial Literacy</h4>
            <p>Coaching and stock market mentoring</p>
          </div>
        </div>

        <div className="graduate-exams">
          <h3>Graduate & Professional School Prep</h3>
          <p>
            We also serve college students preparing for graduate and
            professional school entrance exams:
          </p>
          <div className="exam-list">
            <div className="exam-card">
              <strong>GMAT</strong>
              <span>Business School</span>
            </div>
            <div className="exam-card">
              <strong>GRE</strong>
              <span>Graduate & Business School</span>
            </div>
            <div className="exam-card">
              <strong>Praxis</strong>
              <span>Teacher Certification</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Child's Success Journey?</h2>
          <p>
            At The Learning Quarters, we're more than a tutoring service—we're a
            partnership committed to your child's growth, confidence, and
            success, today and for the future.
          </p>
          <div className="cta-buttons">
            <a href="/#consultation" className="button button-primary">
              Book a Free Consultation
            </a>
            <a href="/#subjects" className="button button-secondary">
              Explore Our Programs
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <img src={logo} alt="TLQ Learning Quarters" className="footer-logo-img" />
          <p>
            Empowering students with personalized tutoring, trusted guidance,
            and measurable results.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/our-approach">Our Approach</Link>
          <a href="/#tutors">Tutors</a>
          <a href="/#subjects">Subjects</a>
          <a href="/#consultation">Consultation</a>
        </div>
        <div className="footer-contact">
          <p>martine@thelearningquarters.com</p>
          <p>(555) 281-4477</p>
          <p>Mon - Sat: 8am - 8pm</p>
        </div>
      </footer>

      <div className="copyright">
        © {new Date().getFullYear()} The Learning Quarters. All rights reserved.
      </div>
    </div>
  );
}
