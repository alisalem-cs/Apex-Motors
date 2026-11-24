import { Link } from 'react-router-dom';
import aboutVideo from '../assets/videos/apex-motors-about.mp4';
import videoPoster from '../assets/videos/apex-motors-about-poster.jpg';
import { products } from '../data/products';
import mohannadPhoto from '../assets/team/mohannad-kaddoura.jpg';
import aliPhoto from '../assets/team/ali-salem.jpg';
import mohammadPhoto from '../assets/team/mohammad-al-hanafi.jpg';
import './About.css';

interface TeamMember {
  name: string;
  initials: string;
  photo?: string;
  role: string;
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: 'Mohannad Kaddoura',
    initials: 'MK',
    photo: mohannadPhoto,
    role: 'Full Stack Web Developer',
    linkedin: 'https://www.linkedin.com/in/mohannad-kaddoura/',
  },
  {
    name: 'Ali Salem',
    initials: 'AS',
    photo: aliPhoto,
    role: 'Full Stack Web Developer',
    linkedin: 'https://www.linkedin.com/in/alisalem-cs/',
  },
  {
    name: 'Mohammad Al Hanafi',
    initials: 'MH',
    photo: mohammadPhoto,
    role: 'Full Stack Web Developer',
    linkedin: 'https://www.linkedin.com/in/mohammadalhanafi-cs/',
  },
];

const values = [
  {
    title: 'Hand-Picked Cars',
    text: 'From everyday sedans to hypercars, every car in our showroom is chosen for quality and character.',
  },
  {
    title: 'Honest Pricing',
    text: 'Real market prices, full specifications and a clear condition on every listing. No surprises.',
  },
  {
    title: 'Simple Buying',
    text: 'Save favourites, compare, and check out securely. Our team contacts you within 24 hours to arrange delivery.',
  },
];

export default function About() {
  const categoryCount = new Set(products.map((car) => car.category)).size;
  const brandCount = new Set(products.map((car) => car.brand)).size;

  return (
    <main className="about-page">
      <section className="page-header">
        <h1>About Apex Motors</h1>
        <p>Driven by passion. Built for performance.</p>
      </section>

      <div className="about-container">
        <section className="about-intro">
          <div className="about-text">
            <span className="about-label">Who We Are</span>
            <h2>The cars you dream about, in one place.</h2>
            <p>
              Apex Motors is an online car showroom built for people who love driving. We bring together
              supercars, luxury SUVs, electric cars and reliable everyday drivers, so you can explore,
              compare and order your next car from anywhere.
            </p>
            <Link to="/products" className="btn-primary">Explore Our Cars</Link>
          </div>

          <div className="about-video">
            <video src={aboutVideo} poster={videoPoster} autoPlay muted loop playsInline controls />
          </div>
        </section>

        <section className="about-stats">
          <div className="about-stat">
            <strong>{products.length}</strong>
            <span>Cars in Stock</span>
          </div>
          <div className="about-stat">
            <strong>{brandCount}</strong>
            <span>Brands</span>
          </div>
          <div className="about-stat">
            <strong>{categoryCount}</strong>
            <span>Categories</span>
          </div>
          <div className="about-stat">
            <strong>24h</strong>
            <span>Response Time</span>
          </div>
        </section>

        <section className="about-values">
          {values.map((value, index) => (
            <div className="about-value" key={value.title}>
              <span className="about-value-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </section>

        <section className="about-team">
          <span className="about-label">The Team</span>
          <h2>Meet the developers</h2>
          <p className="about-team-intro">
            Apex Motors was designed and built with React and TypeScript by a team of three developers.
          </p>

          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="team-avatar team-photo" />
                ) : (
                  <div className="team-avatar">{member.initials}</div>
                )}
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
