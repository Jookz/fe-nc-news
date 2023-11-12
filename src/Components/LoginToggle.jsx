import { React, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

export default function LoginToggle() {
  const { login, setLogin, user, setUser } = useContext(LoginContext);
  const toggleLogin = () => {
    setLogin((currentLogin) => {
      return currentLogin === "logged-out" ? "logged-in" : "logged-out";
    });
    if (login === "logged-in") {
      setUser("");
    } else {
      setUser("grumpy19");
    }
  };
  return (
    <button onClick={toggleLogin} className={`button__${login}`}>
      {login === "logged-out" ? <p>Login</p> : <p>Logout</p>}
    </button>
  );
}
