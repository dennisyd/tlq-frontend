import { useEffect, useMemo, useState, useRef } from "react";
import "./App.css";
import logo from "./assets/logo-transparent.png";
import martineDennis from "./assets/martine-dennis.jpg";
import dylanDennis from "./assets/dylan-dennis.jpg";
import yancyDennis from "./assets/yancy-dennis.jpg";

const fallbackSubjects = [
  {
    id: "k12",
    title: "K-12 Tutoring",
    description:
      "Personalized support in math, reading, science, and writing for every grade."
  },
  {
    id: "college",
    title: "College Tutoring",
    description:
      "One-on-one coaching for core courses, advanced placement, and major prep."
  },
  {
    id: "test-prep",
    title: "Test Preparation",
    description:
      "Focused test prep for SAT, ACT, AP, and state exams with proven results."
  }
];

const fallbackTutors = [
  {
    id: "martine-dennis",
    name: "Martine Dennis",
    specialty: "Mathematics and Test Prep",
    credentials: "M.S. Applied Mathematics, 20 years experience",
    avatar: martineDennis
  },
  {
    id: "yancy-dennis",
    name: "Dr. Yancy Dennis",
    specialty: "STEM and Test Prep",
    credentials: "Ph.D. Chemical Engineering and Artificial Intelligence Professor, 20 years experience",
    avatar: yancyDennis
  },
  {
    id: "dylan-pierce",
    name: "Dylan Pierce",
    specialty: "Special Education & Chess",
    credentials: "B.S. Business, 5 years tutoring experience",
    avatar: dylanDennis
  }
];

const fallbackTestimonials = [
  {
    id: "t1",
    quote:
      "Our son's grades jumped two letter levels in one semester. The sessions were focused and encouraging.",
    name: "Jamie L.",
    role: "Parent of 9th grader"
  },
  {
    id: "t2",
    quote:
      "The SAT prep plan was clear, practical, and effective. I felt ready on test day.",
    name: "Khalil M.",
    role: "Senior, College-bound"
  },
  {
    id: "t3",
    quote:
      "Flexible scheduling and amazing tutors. The learning plan kept us on track all year.",
    name: "Erica D.",
    role: "Parent of 6th grader"
  }
];

const heroStats = [
  {
    label: "Years of experience",
    value: "20+",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 7h14M8 3v4M16 3v4M6 10h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    label: "Students supported",
    value: "500+",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M16 11a4 4 0 1 0-8 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 20a6 6 0 0 1 16 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    label: "Average rating",
    value: "4.9/5",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m12 3 2.7 5.5 6.1.9-4.4 4.2 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.9L12 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

export default function HomePage() {
  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

  const [subjects, setSubjects] = useState(fallbackSubjects);
  const [tutors, setTutors] = useState(fallbackTutors);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const observerRefs = useRef([]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [subjectsRes, tutorsRes, testimonialsRes] = await Promise.all([
          fetch(`${apiBaseUrl}/api/subjects`),
          fetch(`${apiBaseUrl}/api/tutors`),
          fetch(`${apiBaseUrl}/api/testimonials`)
        ]);

        if (subjectsRes.ok) {
          const data = await subjectsRes.json();
          if (Array.isArray(data.subjects)) setSubjects(data.subjects);
        }

        if (tutorsRes.ok) {
          const data = await tutorsRes.json();
          if (Array.isArray(data.tutors)) setTutors(data.tutors);
        }

        if (testimonialsRes.ok) {
          const data = await testimonialsRes.json();
          if (Array.isArray(data.testimonials)) setTestimonials(data.testimonials);
        }
      } catch (error) {
        console.warn("API unavailable, using fallback content.");
      }
    };

    loadData();
  }, [apiBaseUrl]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.dataset.section));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const subjectCards = useMemo(
    () => [
      {
        id: "k12",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80",
        label: "K-12 Tutoring"
      },
      {
        id: "college",
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&q=80",
        label: "College Tutoring"
      },
      {
        id: "test-prep",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop&q=80",
        label: "Test Preparation"
      }
    ],
    []
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch(`${apiBaseUrl}/api/consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        const data = await response.json();
        const missing = data?.fields?.join(", ") || "required fields";
        throw new Error(`Please add ${missing}.`);
      }

      setStatusMessage(
        "Thanks! Your consultation request is in. We'll reach out within 24 hours."
      );
      setFormState({
        name: "",
        email: "",
        phone: "",
        studentGrade: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setStatusMessage(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <header className="top-nav">
        <div className="logo-container">
          <img src={logo} alt="TLQ Learning Quarters" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/our-approach">Our Approach</a>
          <a href="/#tutors">Our Tutors</a>
          <a href="/#subjects">Subjects</a>
          <a href="/#testimonials">Testimonials</a>
        </nav>
        <a className="button button-primary" href="#consultation">
          Get Started
        </a>
      </header>

      <main>
        <section 
          className={`hero ${visibleSections.has('hero') ? 'visible' : ''}`} 
          id="home"
          ref={(el) => {
            if (el) {
              el.dataset.section = 'hero';
              observerRefs.current[0] = el;
            }
          }}
        >
          <div className="hero-content">
            <h1>
              Empowering Youth
              <br />
              to Reach Their Highest Potential
            </h1>
            <p className="hero-subtitle hero-tagline">
              Building Minds, Shaping Futures.
            </p>
            <p className="hero-subtitle">
              At The Learning Quarters, we provide expert tutoring and test preparation for students from elementary school through college and graduate studies. Our instruction is led by certified educators, college professors, and tutors with advanced degrees (Master's & PhDs) who tailor learning plans to each student's needs.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#consultation">
                Get Started
              </a>
              <a className="button button-secondary" href="/about">
                Learn More
              </a>
            </div>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-icon">{stat.icon}</div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80" 
              alt="High school students working with tutor in study session" 
            />
          </div>
        </section>

        <section 
          className={`features ${visibleSections.has('features') ? 'visible' : ''}`}
          aria-label="Highlights"
          ref={(el) => {
            if (el) {
              el.dataset.section = 'features';
              observerRefs.current[1] = el;
            }
          }}
        >
          <div className="feature-card">
            <div className="feature-icon calendar" />
            <h3>Personalized Programs</h3>
            <p>Customized lessons tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon star" />
            <h3>Top-Rated Tutors</h3>
            <p>Experienced and qualified educators.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon clock" />
            <h3>Flexible Scheduling</h3>
            <p>Sessions to fit your busy lifestyle.</p>
          </div>
        </section>

        <section 
          className={`about ${visibleSections.has('about') ? 'visible' : ''}`}
          id="subjects"
          ref={(el) => {
            if (el) {
              el.dataset.section = 'about';
              observerRefs.current[2] = el;
            }
          }}
        >
          <div className="section-heading">
            <p className="eyebrow">Achieve Your Academic Goals</p>
            <h2>
              Expert tutoring for all subjects &amp; grade levels
            </h2>
            <p className="section-subtitle">
              Boost confidence and improve grades with our dedicated one-on-one
              tutoring. We match students with tutors who understand their
              learning style and goals.
            </p>
          </div>

          <div className="subjects-grid">
            {subjectCards.map((card) => (
              <div className="subject-card" key={card.id}>
                <img src={card.image} alt={card.label} />
                <div className="subject-card-footer">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="subjects-details">
            {subjects.map((subject) => (
              <div className="subject-detail" key={subject.id}>
                <h4>{subject.title}</h4>
                <p>{subject.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section 
          className={`tutors ${visibleSections.has('tutors') ? 'visible' : ''}`}
          id="tutors"
          ref={(el) => {
            if (el) {
              el.dataset.section = 'tutors';
              observerRefs.current[3] = el;
            }
          }}
        >
          <div className="section-heading">
            <p className="eyebrow">Our Tutors</p>
            <h2>Meet the team guiding student success</h2>
          </div>
          <div className="tutor-grid">
            {tutors.map((tutor) => (
              <div className="tutor-card" key={tutor.id}>
                {tutor.avatar ? (
                  <img 
                    src={tutor.avatar} 
                    alt={tutor.name}
                    className="tutor-avatar-img"
                  />
                ) : (
                  <div className="tutor-avatar">{tutor.name[0]}</div>
                )}
                <div>
                  <h3>{tutor.name}</h3>
                  <p className="tutor-specialty">{tutor.specialty}</p>
                  <p className="tutor-credentials">{tutor.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section 
          className={`testimonials ${visibleSections.has('testimonials') ? 'visible' : ''}`}
          id="testimonials"
          ref={(el) => {
            if (el) {
              el.dataset.section = 'testimonials';
              observerRefs.current[4] = el;
            }
          }}
        >
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>Families love learning with us</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="testimonial-card" key={testimonial.id}>
                <p className="quote">"{testimonial.quote}"</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section 
          className={`consultation ${visibleSections.has('consultation') ? 'visible' : ''}`}
          id="consultation"
          ref={(el) => {
            if (el) {
              el.dataset.section = 'consultation';
              observerRefs.current[5] = el;
            }
          }}
        >
          <div className="consultation-card">
            <div>
              <p className="eyebrow">Schedule a Free Consultation</p>
              <h2>Get a personalized learning plan</h2>
              <p>
                Share a few details about the student, and we will respond within 24 hours.
              </p>
              <ul className="consultation-list">
                <li>1:1 tutoring online or in-person</li>
                <li>Semi-Private & Group Test Prep</li>
                <li>Progress updates after every session</li>
                <li>Flexible scheduling options</li>
              </ul>
            </div>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Parent/Guardian Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Jordan Smith"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="jordan@email.com"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 222-3344"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="studentGrade">Student Grade</label>
                <input
                  id="studentGrade"
                  name="studentGrade"
                  type="text"
                  value={formState.studentGrade}
                  onChange={handleInputChange}
                  placeholder="7th Grade"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject Focus</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Math or Science"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell us a little about your goals."
                  rows="4"
                />
              </div>
              <button
                className="button button-primary full-width"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Schedule Consultation"}
              </button>
              {statusMessage && <p className="form-status">{statusMessage}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <img src={logo} alt="TLQ Learning Quarters" className="footer-logo-img" />
          <p>
            Empowering students with personalized tutoring, trusted guidance,
            and measurable results.
          </p>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/#tutors">Tutors</a>
          <a href="/#subjects">Subjects</a>
          <a href="#consultation">Consultation</a>
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

