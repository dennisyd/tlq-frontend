import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SATRegistration.css";
import logo from "./assets/logo-transparent.jpg";
import satImage from "./assets/satreg.png";

export default function SATRegistration() {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    currentScore: "",
    targetScore: "",
    testDate: "",
    message: ""
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
      const response = await fetch(`${API_BASE}/api/sat-registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatusMessage(
          "Thank you for registering! We'll send you confirmation details and payment verification within 24 hours."
        );
        setFormState({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          grade: "",
          currentScore: "",
          targetScore: "",
          testDate: "",
          message: ""
        });
      } else {
        setStatusMessage("There was an error submitting your registration. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setStatusMessage("There was an error submitting your registration. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`sat-page ${visible ? "visible" : ""}`}>
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
          <Link to="/sat-registration">SAT Registration</Link>
          <a href="/#tutors">Our Tutors</a>
          <a href="/#subjects">Subjects</a>
        </nav>
        <a className="button button-primary" href="/#consultation">
          Get Started
        </a>
      </header>

      <section className="sat-hero">
        <div className="sat-hero-content">
          <h1>SAT Crash Course</h1>
          <p className="sat-subtitle">Master SAT Math Strategies & Boost Your Score</p>
        </div>
      </section>

      <section className="sat-details">
        <div className="sat-container">
          <div className="sat-info-column">
            <img src={satImage} alt="SAT Crash Course" className="sat-promo-image" />
            
            <div className="sat-highlights">
              <h2>What You'll Learn</h2>
              <ul className="sat-features-list">
                <li>
                  <span className="check-icon">✓</span>
                  <strong>Master SAT Math Strategies</strong> - Proven techniques to tackle every problem type
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <strong>Practice with Real Test Problems</strong> - Work through actual SAT questions
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <strong>Boost Your Score</strong> - Learn time-saving shortcuts and test-taking tactics
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <strong>Expert Guidance</strong> - Taught by SAT experts and co-authors of "Your SAT Math Companion Book"
                </li>
              </ul>

              <div className="sat-instructors">
                <h3>Your Instructors</h3>
                <p><strong>Martine & Dr. Dennis</strong></p>
                <p>SAT Experts & Co-Authors of "Your SAT Math Companion Book"</p>
              </div>

              <div className="sat-event-details">
                <h3>Event Details</h3>
                <div className="detail-item">
                  <strong>Date:</strong> Saturday, February 28, 2026
                </div>
                <div className="detail-item">
                  <strong>Time:</strong> 9:00 AM - 12:30 PM
                </div>
                <div className="detail-item">
                  <strong>Duration:</strong> 3.5 Hours
                </div>
                <div className="detail-item">
                  <strong>Format:</strong> In-Person
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> Meeting Room B @ Owings Mills Library
                </div>
              </div>

              <div className="sat-pricing">
                <h3>Investment</h3>
                <p className="price-amount">$79</p>
                <p className="price-description">Complete SAT Math Crash Course</p>
              </div>

              <div className="sat-payment-options">
                <h3>Payment Options</h3>
                <div className="payment-method">
                  <strong>Zelle:</strong> dennisyd@gmail.com
                </div>
                <div className="payment-method">
                  <strong>CashApp:</strong> $dennisyd
                </div>
                <div className="payment-method">
                  <strong>PayPal:</strong> dennisyd@alum.mit.edu
                </div>
                <p className="payment-note">
                  After registering, please complete payment using one of the methods above. 
                  You'll receive a confirmation email once payment is verified. Class will be held at Meeting Room B @ Owings Mills Library.
                </p>
              </div>
            </div>
          </div>

          <div className="sat-form-column">
            <div className="sat-form-card">
              <h2>Register Now</h2>
              <p className="form-subtitle">
                Secure your spot in this intensive SAT prep crash course
              </p>
              <form className="sat-registration-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="studentName">Student Name *</label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    value={formState.studentName}
                    onChange={handleInputChange}
                    placeholder="Student's full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="parentName">Parent/Guardian Name *</label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    value={formState.parentName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="grade">Current Grade *</label>
                  <select
                    id="grade"
                    name="grade"
                    value={formState.grade}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select grade</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                    <option value="11th">11th Grade</option>
                    <option value="12th">12th Grade</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="currentScore">Current/Last SAT Score (if taken)</label>
                  <input
                    id="currentScore"
                    name="currentScore"
                    type="text"
                    value={formState.currentScore}
                    onChange={handleInputChange}
                    placeholder="e.g., 1200 or Not taken yet"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="targetScore">Target SAT Score *</label>
                  <input
                    id="targetScore"
                    name="targetScore"
                    type="text"
                    value={formState.targetScore}
                    onChange={handleInputChange}
                    placeholder="e.g., 1450"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="testDate">Upcoming SAT Test Date</label>
                  <input
                    id="testDate"
                    name="testDate"
                    type="text"
                    value={formState.testDate}
                    onChange={handleInputChange}
                    placeholder="e.g., March 2026"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Questions or Comments</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Any specific areas you'd like to focus on?"
                    rows="3"
                  />
                </div>

                <button
                  className="button button-primary full-width"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </button>

                {statusMessage && <p className="form-status success">{statusMessage}</p>}
              </form>
            </div>
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
          <Link to="/sat-registration">SAT Registration</Link>
          <a href="/#tutors">Tutors</a>
          <a href="/#subjects">Subjects</a>
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
