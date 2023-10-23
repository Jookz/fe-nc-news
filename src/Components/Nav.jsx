import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section className="nav-bar">
      <Link to="/articles"> Articles</Link>
    </section>
  );
}
