import Header from "./components/Header";
import Content from "./components/content";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import './App.css'

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",       // make flex container
    flexDirection: "column", // stack items vertically
    justifyContent: "center", // center vertically
    alignItems: "center",   // center horizontally
    gap: "20px",            // spacing between components
    textAlign: "center",
    padding: "20px"
  };

  return (
    <div style={appStyle} className="box">
      <Header />
      <Content />
    </div>
  );
}

export default App;
