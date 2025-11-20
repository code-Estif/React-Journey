function MoodBox({ happy }) {
    return (
      <div
        style={{
          backgroundColor: happy ? "lightgreen" : "lightcoral",
          padding: "20px",
          borderRadius: "10px",
          width: "200px",
          textAlign: "center",
          margin: "10px",
          fontFamily: "sans-serif",
        }}
      >
        <h2>{happy ? "I feel great!" : "Not feeling good."}</h2>
        <p style={{ fontSize: "40px" }}>
          {happy ? "😄" : "😞"}
        </p>
      </div>
    );
  }
  
  export default MoodBox;
  