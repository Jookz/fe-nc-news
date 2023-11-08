import { Link } from "react-router-dom";
import LoginToggle from "./LoginToggle";
import { useContext } from "react";

export default function Nav() {
  return (
    <section className="nav-bar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/articles">
        {" "}
        Articles
      </Link>
      <LoginToggle />
    </section>
  );
}
