import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState("logged-out");
  const [user, setUser] = useState("");

  return (
    <LoginContext.Provider value={{ login, setLogin, user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
