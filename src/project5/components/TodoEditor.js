import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  // Ref 객체
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 📝</h4>
      <div className="editor_wrapper">
        <input
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>+</button>
      </div>
    </div>
  );
};

export default TodoEditor;
