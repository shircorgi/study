import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // 초기화 값 (0 버튼을 누르면 0 으로 돌아옴)
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>✨ Simple Counter ✨</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} reset={reset} />
      </section>
    </div>
  );
}

export default App;
