import { createContext, useState } from "react";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [username, setUsername] = useState("Estif");

  return (
    <SettingsContext.Provider value={{ username, setUsername }}>
      {children}
    </SettingsContext.Provider>
  );
}