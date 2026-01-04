import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Greeting() {
  const { language } = useContext(LanguageContext);

  return (
    <h1>
      {language === "en" ? "Hello!" : "ሰላም!"}
    </h1>
  );
}

export default Greeting;
