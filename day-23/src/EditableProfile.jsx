import { useState, useRef, useEffect } from "react";

function EditableProfile() {
  const [name, setName] = useState("Estif");
  const [isEditing, setIsEditing] = useState(false);
  const prevNameRef = useRef(name);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      prevNameRef.current = name;
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleSave() {
    setIsEditing(false);
  }

  function handleCancel() {
    setName(prevNameRef.current);
    setIsEditing(false);
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="avatar">
          {name ? name.charAt(0).toUpperCase() : "?"}
        </div>

        {isEditing ? (
          <input
            ref={inputRef}
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h2 className="username">{name}</h2>
        )}

        <div className="actions">
          {isEditing ? (
            <>
              <button className="btn primary" onClick={handleSave}>
                Save
              </button>
              <button className="btn" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className="btn primary" onClick={() => setIsEditing(true)}>
              Edit name
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditableProfile;
