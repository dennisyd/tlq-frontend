import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurApproach.css";
import logo from "./assets/logo-transparent.png";

export default function OurApproach() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`approach-page ${visible ? "visible" : ""}`}>
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
      <div className="site-title">THE LEARNING QUARTERS</div>

      <section className="approach-hero">
        <div className="approach-hero-content">
          <h1>Our Approach: Why It Works</h1>
          <p className="tagline">Personalized. Expert. Proven.</p>
        </div>
      </section>

      <section className="approach-content">
        <div className="approach-intro">
          <p>
            We don't believe in one-size-fits-all tutoring. Each student is
            paired with an elite educator, often holding advanced degrees and
            extensive experience, who adapts to their learning style and develops
            a customized plan.
          </p>
          <p>
            This one-on-one approach strengthens skills, builds confidence, and
            fosters resilience, equipping students for academic success and
            lifelong growth.
          </p>
        </div>

        <div className="why-it-works">
          <h2>Why The Learning Quarters Works</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h4>Personalized Plans</h4>
              <p>Tailored strategies for each student's strengths and goals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h4>Expert Educators</h4>
              <p>
                Certified teachers, college professors, and advanced-degree
                instructors
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h4>Proven Results</h4>
              <p>Measurable academic improvement and skill mastery</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h4>Life-Ready Skills</h4>
              <p>
                Financial literacy, stock market investing, and practical
                decision-making
              </p>
            </div>
          </div>
        </div>

        <div className="approach-details">
          <h2>Our Methodology</h2>
          <div className="methodology-grid">
            <div className="method-card">
              <h3>1. Assessment</h3>
              <p>
                We begin with a comprehensive evaluation of the student's current
                academic standing, learning style, and goals.
              </p>
            </div>
            <div className="method-card">
              <h3>2. Customization</h3>
              <p>
                Based on the assessment, we create a personalized learning plan
                that addresses specific needs and challenges.
              </p>
            </div>
            <div className="method-card">
              <h3>3. Expert Instruction</h3>
              <p>
                Students work one-on-one with elite educators who adapt their
                teaching methods to maximize understanding and retention.
              </p>
            </div>
            <div className="method-card">
              <h3>4. Progress Tracking</h3>
              <p>
                We continuously monitor progress and adjust strategies to ensure
                consistent improvement and goal achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-cta">
        <div className="cta-content">
          <h2>Experience the Difference</h2>
          <p>
            See how our personalized approach can transform your child's academic
            journey and build skills that last a lifetime.
          </p>
          <div className="cta-buttons">
            <a href="/#consultation" className="button button-primary">
              Schedule a Free Consultation
            </a>
            <Link to="/about" className="button button-secondary">
              Learn More About Us
            </Link>
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
          <p>(443) 420-7198</p>
          <p>Mon - Sat: 8am - 8pm</p>
        </div>
      </footer>

      <div className="copyright">
        © {new Date().getFullYear()} The Learning Quarters. All rights reserved.
      </div>
    </div>
  );
}
