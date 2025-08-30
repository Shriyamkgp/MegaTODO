import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  let containerStyle = {
    margin: "auto 66.40px",
    padding: "12px 0 12px 0",
  };

  return (
    <div className="Container my-4" style={containerStyle}>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Todo Title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="Todo Title"
            aria-describedby="Enter the Todo title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Todo Description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="Todo Description"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
