import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [taskList, setTaskList] = useState(TASKS);

  function handleTaskFormSubmit(taskObject) {
    const newTaskList = [...taskList, taskObject];
    setTaskList(newTaskList);
  }

  function handleDelete(taskId) {
    const newTasks = taskList.filter((task, index) => index !== taskId);
    setTaskList(newTasks); 
  }

  const tasksToDisplay = taskList.filter((task) => {
    if (activeCategory === "All") {
      return true;
    } else {
      return task.category === activeCategory;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay} activeCategory={activeCategory} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
