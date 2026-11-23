import { Link } from "react-router-dom";

const Featured = [
  "Sports",
  "Supercar",
  "Luxury",
  "SUV",
  "Electric",
  "Hypercar",
];

export default function Home() {

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-tag">PREMIUM AUTOMOTIVE</p>

          <h1>
            DRIVE THE
            <br />
            <span>EXTRAORDINARY.</span>
          </h1>

          <p className="hero-description">
            Discover a collection of exceptional cars,
            designed for those who appreciate performance,
            luxury and individuality.
          </p>

          <Link to="/products" className="primary-button">
            Explore Collection <span>↗</span>
          </Link>
        </div>

        <div className="hero-bottom">
          <span>PERFORMANCE</span>
          <span>PRECISION</span>
          <span>PASSION</span>
        </div>
      </section>

      {/* FEATURED */}
      

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="section-heading">
          <div>
            <p>FIND YOUR DRIVE</p>
            <h2>Featured Collection</h2>
          </div>
        </div>

        <div className="category-grid">
          {Featured.map((featured) => (
            <Link
              key={featured}
              to={`/products?category=${encodeURIComponent(featured)}`}
              className={`category-card category-${featured.toLowerCase()}`}
            >
              <div className="category-overlay"></div>

              <div className="category-content">
                <h3>{featured}</h3>
                <span>Explore Collection ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BRAND SECTION */}
      <section className="brand-section">
        <div className="brand-content">
          <p>APEX MOTORS</p>

          <h2>
            Where Passion
            <br />
            Meets <span>Performance.</span>
          </h2>

          <Link to="/products" className="primary-button">
            Discover Your Next Drive ↗
          </Link>
        </div>
      </section>

    </main>
  );
}