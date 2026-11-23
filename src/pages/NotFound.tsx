
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found">
      <span className="section-label">404 — PAGE NOT FOUND</span>
      <h1>Wrong turn?</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>

      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </main>
  );
};

export default NotFound;
