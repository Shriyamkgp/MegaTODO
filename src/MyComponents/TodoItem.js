import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div style={{ margin: "auto 30px", fontFamily: "" }}>
      <h4 style={{ fontWeight: "400" }}>
        {todo.sno + 1}. {todo.title}
      </h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
