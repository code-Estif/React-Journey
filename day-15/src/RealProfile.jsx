import { useState } from "react";

function RealProfile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    city: "",
  });

  return (
    <div className="profile-card">
      <input 
        placeholder="Name"
        onChange={(e) =>
          setProfile({ ...profile, name: e.target.value })
        }
      />

      <input 
        placeholder="Age"
        onChange={(e) =>
          setProfile({ ...profile, age: e.target.value })
        }
      />

      <input 
        placeholder="City"
        onChange={(e) =>
          setProfile({ ...profile, city: e.target.value })
        }
      />

      <p>
        Hello, my name is {profile.name}, I am {profile.age},I am from {profile.city}
      </p>
    </div>
  );
}

export default RealProfile;
