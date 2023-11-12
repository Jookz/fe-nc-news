import { LoginContext } from "../Contexts/LoginContext";
import DarkModeToggle from "./DarkModeToggle";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(LoginContext);
  return (
    <div className="header">
      {user ? <p className="logged-in-as">Logged in as: {user}</p> : <p></p>}
      <h1>NC News</h1>
      <h2>Your go-to for mildly interesting tidbits</h2>
    </div>
  );
}
