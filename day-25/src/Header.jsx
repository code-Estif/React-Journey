import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function Header() {
  const { username } = useContext(SettingsContext);

  return <h2>Welcome, {username}</h2>;
}

export default Header;