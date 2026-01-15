import { useEffect, useState } from "react";
import "./About.css";
import martineDennis from "./assets/martine-dennis.jpg";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`about-page ${visible ? "visible" : ""}`}>
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
            At The Learning Quarters, we provide expert tutoring and test
            preparation for students from elementary school through college and
            graduate studies. Our instruction is led by certified educators,
            college professors, and tutors with advanced degrees (Master's &
            PhDs) who tailor learning plans to each student's needs.
          </p>
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
              <strong>MCAT</strong>
              <span>Medical School</span>
            </div>
            <div className="exam-card">
              <strong>GMAT</strong>
              <span>Business School</span>
            </div>
            <div className="exam-card">
              <strong>GRE</strong>
              <span>Graduate & Business School</span>
            </div>
            <div className="exam-card">
              <strong>LSAT</strong>
              <span>Law School</span>
            </div>
            <div className="exam-card">
              <strong>Praxis</strong>
              <span>Teacher Certification</span>
            </div>
          </div>
        </div>
      </section>

      <section className="our-approach">
        <h2>Our Approach: Why It Works</h2>
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

        <div className="why-it-works">
          <h3>Why The Learning Quarters Works</h3>
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
    </div>
  );
}

