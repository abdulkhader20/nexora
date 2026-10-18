
import { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import logo from "./assets/logo.svg";
import "./index.css";

const brandName = "Nexora";

const services = [
  {
    title: "Website Development",
    description: "Modern business websites designed to look premium, load fast, and convert visitors into leads.",
    icon: Sparkles,
  },
  {
    title: "Web App Development",
    description: "Custom dashboards, product pages, and client portals built for performance and growth.",
    icon: TrendingUp,
  },
  {
    title: "Business Automation",
    description: "Process automation, APIs, and backend systems that reduce manual work and scale operations.",
    icon: BarChart3,
  },
];

const technologies = [
  { name: "HTML", tone: "violet" },
  { name: "CSS", tone: "blue" },
  { name: "JavaScript", tone: "gold" },
  { name: "React", tone: "cyan" },
  { name: "Node.js", tone: "green" },
  { name: "MongoDB", tone: "rose" },
  { name: "MySQL", tone: "indigo" },
];

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "4.9/5", label: "Client satisfaction" },
  { value: "30d", label: "Typical launch window" },
];

const steps = [
  {
    title: "Discover",
    text: "We learn your goals, audience, and constraints before we sketch anything.",
  },
  {
    title: "Design",
    text: "We turn strategy into a clear, polished experience your team can trust.",
  },
  {
    title: "Launch",
    text: "We ship a refined, responsive product built for real business momentum.",
  },
];

const testimonials = [
  {
    quote:
      "Our dental clinic in Vijayawada needed a website that felt trustworthy and local. The design looked premium, professional, and helped more patients from our city call us after seeing the site.",
    author: "Dr. Venkata Rao",
    role: "Owner, Sree Dental Care, Vijayawada",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "We wanted a website that represented our auto workshop properly in Guntur. The final result looked polished and helped us win more local enquiries from people who trust our service.",
    author: "Mohammed Javeed",
    role: "Manager, City Wheel Works, Guntur",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "We needed a website that felt true to our style and customer base in Vizag. The final design is clean, credible, and now more people contact us from nearby areas.",
    author: "Lakshmi Devi",
    role: "Founder, Sri Lakshmi Boutique, Vizag",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "Our restaurant in Rajahmundry needed a modern website that looked professional and easy to trust. The new design helped more local customers reach out and book tables.",
    author: "Ramesh Kumar",
    role: "Owner, Royal Spice Grill, Rajahmundry",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "We wanted a clean, reliable website for our interior design business in Rajahmundry. The final result looks premium and helped us attract more enquiries from nearby families.",
    author: "Sowjanya Reddy",
    role: "Founder, DreamSpace Interiors, Rajahmundry",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
];

const projectCards = [
  {
    title: "ShoppyGlobe",
    description: "Responsive e-commerce platform built with React, Redux, and React Router for product browsing, cart management, and smooth user navigation.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "YouTube-Inspired Platform",
    description: "MERN stack video platform with uploads, authentication, likes, comments, shares, and personalized recommendations for a rich streaming experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based updates, live API integration, and a responsive interface for multi-device access.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio built with HTML and CSS to present skills, projects, and professional profile in a clean user-friendly layout.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "College Fest Registration System",
    description: "Cross-device registration app with client-side validation and dynamic form interactions for college event signups.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleContact(event) {
    event.preventDefault();

    const whatsappText = encodeURIComponent(
      `Hello, I want to discuss a new project.\n\nClient email: ${email}\n\nProject details:\n${message}`
    );
    const emailSubject = encodeURIComponent(`Project enquiry - ${brandName}`);
    const emailBody = encodeURIComponent(
      `Hello,\n\nI would like to discuss a new project.\n\nClient email: ${email}\n\nProject details:\n${message}`
    );

    const whatsappUrl = `https://wa.me/917569211459?text=${whatsappText}`;
    const emailUrl = `mailto:mohammadabdulkhader20@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = emailUrl;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={closeMenu}>
            <img src={logo} alt={`${brandName} logo`} className="brand-logo" />
            <span>
              {brandName}
            </span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? "nav open" : "nav"}>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-signup" href="tel:+917569211459" onClick={closeMenu}>
              Call us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <Sparkles size={15} />
                Digital growth for growing businesses
              </span>
              <h1>
                Stronger local brands start with websites that convert.
              </h1>
              <p>
                {brandName} designs polished, high-converting websites and digital experiences for businesses that want a stronger online presence, smoother customer journey, and real growth in their market.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="tel:+917569211459">
                  Call for a quote <ArrowRight size={18} />
                </a>
                <a className="button-secondary" href="#services">
                  Explore services
                </a>
              </div>
              <div className="hero-trust">
                <CheckCircle2 size={17} />
                Trusted by growing businesses that want a stronger local presence.
              </div>
            </div>

            <div className="hero-visual" aria-label="NexaForge product preview">
              <div className="visual-card main-card">
                <div className="card-head">
                  <span className="dot purple" />
                  <span className="dot pink" />
                  <span className="dot gold" />
                  <span className="mini-label">NEXORA</span>
                </div>
                <div className="card-body">
                  <div className="chart-box">
                    <div className="chart-bar short" />
                    <div className="chart-bar medium" />
                    <div className="chart-bar tall" />
                    <div className="chart-bar medium" />
                  </div>
                  <div className="stat-stack">
                    <div className="mini-stat">
                      <span>Lead growth</span>
                      <strong>+142%</strong>
                    </div>
                    <div className="mini-stat muted">
                      <span>Avg. launch</span>
                      <strong>14 days</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-badge top-badge">
                <Target size={15} /> Strategy first
              </div>
              <div className="floating-badge bottom-badge">
                <Globe size={15} /> Built for growth
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container split-layout">
            <div>
              <span className="section-label">WHY TEAMS CHOOSE US</span>
              <h2>Strategy-first software and web experiences that support real growth.</h2>
            </div>
            <div className="about-copy">
              <p>
                We work with founders, service businesses, and modern teams that need a stronger digital presence, smoother customer journey, and better tools for day-to-day operations.
              </p>
              <div className="feature-list">
                <div>
                  <Building2 size={18} />
                  Clear positioning for modern brands
                </div>
                <div>
                  <ShieldCheck size={18} />
                  Trusted support from planning to launch
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="templates section" id="templates">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">PROJECTS</span>
              <h2>Projects completed during my full stack development training and self-learning journey.</h2>
            </div>
            <div className="template-grid">
              {projectCards.map((project) => (
                <article className="template-card" key={project.title}>
                  <img src={project.image} alt={project.title} />
                  <div className="template-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-head">
              <span className="section-label">WHAT WE DO</span>
              <h2>Digital solutions that make business easier to trust.</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="tel:+917569211459" className="text-link">
                      Call us <ArrowRight size={15} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="tech-stack section">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">TECHNOLOGIES</span>
              <h2>Core tools and technologies used to build responsive, scalable digital products.</h2>
            </div>
            <div className="tech-list">
              {technologies.map((tech) => (
                <span className={`tech-pill tech-${tech.tone}`} key={tech.name}>{tech.name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">OUR PROCESS</span>
              <h2>A practical system built for speed and clarity.</h2>
            </div>
            <div className="process-grid">
              {steps.map((step, index) => (
                <div className="process-card" key={step.title}>
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">LOCAL REVIEWS</span>
              <h2>Trusted by local businesses that wanted a stronger online presence.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.author}>
                  <div className="review-topline">
                    <div className="stars">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="review-badge">Verified review</span>
                  </div>
                  <p>“{item.quote}”</p>
                  <div className="author-block">
                    <img className="review-avatar" src={item.image} alt={item.author} />
                    <div className="author-copy">
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-label">LET'S TALK</span>
              <h2>Ready to build something that feels credible from day one?</h2>
              <p>
                Tell us what you want to improve and we’ll help you map the right next step.
              </p>
              <div className="contact-pill">
                <Mail size={17} />
                <a href="mailto:mohammadabdulkhader20@gmail.com">mohammadabdulkhader20@gmail.com</a>
              </div>
              <div className="contact-pill">
                <Phone size={17} />
                <a href="tel:+917569211459">+91 75692 11459</a>
              </div>
              <div className="contact-pill address-pill">
                <MapPin size={17} />
                <span>Rajahmundry, Andhra Pradesh</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your website, app, or business requirement..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />

              <button className="button-primary form-button" type="submit">
                Send enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <a
        className="wa-float"
        href="https://wa.me/917569211459?text=Hi%20NexaForge%2C%20I%20want%20to%20discuss%20my%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      <footer className="site-footer">
        <div className="container footer-layout">
          <Link className="brand footer-brand" to="/">
            <img src={logo} alt={`${brandName} logo`} className="brand-logo" />
            <span>
              {brandName}
            </span>
          </Link>
          <p>Thoughtfully designed for growing businesses.</p>
          <span>© {new Date().getFullYear()} {brandName}</span>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
