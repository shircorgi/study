import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// 목 데이터 설정하기
//(기능이 완벽하게 구현되지 않은 상태에서 테스트 목적으로 사용하는 데이터)
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState([mockTodo]);

  //Ref 객체 사용
  const idRef = useRef(3);
  //아이템 추가 함수 만들기
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.Done,
          };
        } else {
          return it;
        }
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
