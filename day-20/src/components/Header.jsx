import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return <h1>Current theme: {theme}</h1>;
}

export default Header;
