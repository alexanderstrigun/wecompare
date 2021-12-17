import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export const Dropdown = ({ workItem, workItemList, value, setWorkItem }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

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
  const handleIndividualEditClick = (workItem, event) => {
    setWorkItem({ ...workItem, category: event.target.value });
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

  const renderedOptions = categories.map(({ category, id }) => {
    return (
      <input
        type="button"
        key={id}
        onClick={(event) => {
          event.preventDefault();
          handleIndividualEditClick(workItem, event);
        }}
        value={category}
        name="category"
      />
    );
  });

  return (
    <>
      <DropdownMenu
        type="button"
        onClick={handleDropdownClick}
        value={workItem.category}
        name="category"
      />

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

const DropdownMenu = styled.input`
  width: 80%;
`;
