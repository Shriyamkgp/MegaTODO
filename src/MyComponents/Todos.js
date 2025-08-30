import React from "react";
import TodoItem from "./TodoItem";
const Todos = (props) => {
  let containerStyle = {
    minHeight: "70vh",
    margin: " 20px auto 20px 66.4px",
    padding: "0",
    border: "1px solid maroon",
    borderRadius: "20px",
    background: "lightyellow",
    boxShadow: "10px 10px 3px lightgrey",
  };
  return (
    <div className="container" style={containerStyle}>
      <h3 className="my-3">
        <label style={{ margin: "auto 30px", fontFamily: "cursive" }}>
          ToDos List
        </label>
      </h3>
      <hr style={{ border: "1.5px solid maroon", borderRadius: "1px" }} />
      {props.todos.length === 0 ? (
        <p style={{ margin: "auto 30px" }}>No Todos to Display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
};

export default Todos;
