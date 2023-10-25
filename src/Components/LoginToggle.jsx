import { React, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

export default function LoginToggle() {
  const { login, setLogin } = useContext(LoginContext);
  const toggleLogin = () => {
    setLogin((currentLogin) => {
      return currentLogin === "logged-out" ? "logged-in" : "logged-out";
    });
  };
  return (
    <button onClick={toggleLogin} className={`button__${login}`}>
      Login
    </button>
  );
}
