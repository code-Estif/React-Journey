function HobbyList() {
    const hobbies = ["Coding", "Football", "Reading", "Music"];
  
    return (
      <div className="hobby-card">
        <h2>My Hobbies</h2>
        {hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p>
        ))}
      </div>
    );
  }
  
  export default HobbyList;
  