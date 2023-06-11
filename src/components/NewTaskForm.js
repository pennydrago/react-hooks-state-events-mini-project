import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [details, setDetails] = useState("");

  const categoriesToDisplay = categories.filter((category) => category !== "All");

  const [selectedCategory, setSelectedCategory] = useState(categoriesToDisplay[0]);
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }
  
  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("in here")
    const taskObject = {
      text: details,
      category: selectedCategory,
    };
    onTaskFormSubmit(taskObject);
    console.log("submit")
    setDetails("");
    setSelectedCategory(categoriesToDisplay[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoriesToDisplay.map((category) => {
            return <option key={category}>{category}</option>
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
