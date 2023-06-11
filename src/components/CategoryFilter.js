import React from "react";

function CategoryFilter({categories, activeCategory, setActiveCategory}) {
  
  function handleClick(category) {
    setActiveCategory(category);
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        let buttonClass ="";
        if(category === activeCategory) {
          buttonClass = "selected";
        }
        return <button key={category} className={buttonClass} onClick={() => handleClick(category)}>{category}</button>
      })
      }
    </div>
  );
}

export default CategoryFilter;
