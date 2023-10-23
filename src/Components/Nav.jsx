import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/articles"> Articles</Link>
    </div>
  );
}
