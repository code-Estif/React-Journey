function ClickMessage() {

  function showMessage(msg) {
    console.log(msg);
  }

  return (
    <div className="click-msg">
      <button onClick={() => showMessage("liked")}>Like</button>
      <button onClick={() => showMessage("shared")}>share</button>
      <button onClick={() => showMessage("saved")}>save</button>
    </div>
  );
}

export default ClickMessage;