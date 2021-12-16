import { useState, useEffect } from "react";
import { useWorkItemContext } from "../contexts/workItemProvider";
import { v4 as uuidv4 } from "uuid";

export const Dropdown = ({ setWorkItem, workItem, workItemList }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  ///////toggle dropdown visibility
  const handleDropdownClick = (event) => {
    event.preventDefault();
    setIsDropdownVisible(!isDropdownVisible);
  };

  /////make the input field in the dropdown controlled
  const handleInputFieldChange = (event) => {
    setNewCategory(event.target.value);
  };

  /////when user clicks add button, categories are set
  const handleAddClick = (event) => {
    event.preventDefault();
    setCategories([{ id: uuidv4(), category: newCategory }, ...categories]);
  };
  /////click on individual caregory
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    setCategories([
      { id: uuidv4(), category: "" },
      ...new Set(
        workItemList.map((item) => {
          return { id: uuidv4(), category: item.category };
        })
      ),
    ]);
  }, [workItemList]);

  useEffect(() => {
    setWorkItem({
      ...workItem,
      category: selectedCategory,
    });
  }, [selectedCategory]);

  const renderedOptions = categories.map(({ category, id }) => {
    return (
      <button
        key={id}
        onClick={(event) => {
          event.preventDefault();
          handleCategoryClick(category);
        }}
      >
        {category}
      </button>
    );
  });

  return (
    <>
      <button onClick={handleDropdownClick} name={name}>
        {selectedCategory}
      </button>

      {isDropdownVisible ? (
        <div>
          <input
            onChange={handleInputFieldChange}
            type="text"
            value={newCategory}
          />
          <button onClick={handleAddClick}>add</button>
          <div>{renderedOptions}</div>
        </div>
      ) : null}
    </>
  );
};
