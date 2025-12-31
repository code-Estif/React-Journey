import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <p>The theme is {theme}</p>
      <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Content;
