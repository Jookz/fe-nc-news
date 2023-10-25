import { Link } from "react-router-dom";
import LoginToggle from "./LoginToggle";

export default function Nav() {
  return (
    <section className="nav-bar">
      <Link to="/articles"> Articles | </Link>
      <Link to="/topics">Topics | </Link>
      <LoginToggle />
    </section>
  );
}
