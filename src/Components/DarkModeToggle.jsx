import { React, useContext } from "react";
import { DarkModeContext } from "../Contexts/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const toggleDarkMode = () => {
    setDarkMode((currentMode) => {
      return currentMode === "light-mode" ? "dark-mode" : "light-mode";
    });
  };
  return (
    <button onClick={toggleDarkMode} className={`button__${darkMode}`}>
      Dark/Light Mode
    </button>
  );
}
