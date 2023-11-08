import { LoginContext } from "../Contexts/LoginContext";
import DarkModeToggle from "./DarkModeToggle";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(LoginContext);
  return (
    <div className="header">
      {user === "grumpy19" ? <p>Logged in as: grumpy19</p> : <p></p>}
      <DarkModeToggle />
      <h1>NC News</h1>
      <h2>Your go-to for mildly interesting tidbits</h2>
    </div>
  );
}
