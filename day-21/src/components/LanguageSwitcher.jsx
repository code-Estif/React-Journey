import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="switch">
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("am")}>Amharic</button>
      <p>Current language: {language}</p>
    </div>
  );
}

export default LanguageSwitcher;
