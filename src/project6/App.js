import "./App.css";
import Welcome from "./Welcome";
import React, { useState } from "react";

function App() {
  // name: 이름을 입력
  // submittedName: 버튼을 눌렀을 때 저장
  const [name, setName] = useState("");
  const [submitName, setSubmitName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // 버튼 클릭했을 때 나옴
  // 현재 입력된 이름을 setSubmittedName 에 저장
  const handleSubmit = () => {
    setSubmitName(name);
  };

  return (
    <div className="Hello">
      <input
        type="text"
        placeholder="Hello World!"
        value={name}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSubmit}>Greet~!✨</button>
      <Welcome submitName={submitName} />
    </div>
  );
}

export default App;
