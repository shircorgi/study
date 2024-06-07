import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createDate, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkBox_col">
        <input onChage={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
