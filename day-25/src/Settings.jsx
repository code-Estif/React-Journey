import { useContext, useRef, useState, useEffect } from "react";
import { SettingsContext } from "./SettingsContext";

function Settings() {
  const { username, setUsername } = useContext(SettingsContext);

  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  // focus input when edit starts
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleSave() {
    setUsername(inputRef.current.value);
    setIsEditing(false);
  }

  return (
    <div>
      {!isEditing && (
        <>
          <p>Username: {username}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      {isEditing && (
        <>
          <input
            ref={inputRef}
            defaultValue={username}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
}

export default Settings;