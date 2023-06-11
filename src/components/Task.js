import React from "react";

function Task({taskId, text, category, handleDelete}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(taskId)}>X</button>
    </div>
  );
}

export default Task;
