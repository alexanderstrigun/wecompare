import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export const Dropdown = ({ workItem, workItemList, width, setWorkItem }) => {
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
    const uniqueCategories = new Set();
    [{ id: uuidv4(), category: newCategory }, ...categories].forEach((item) => {
      uniqueCategories.add(item.category);
    });
    const test = Array.from(uniqueCategories).map((uniqueCategory) => {
      return { id: uuidv4(), category: uniqueCategory };
    });

    setCategories(test);
  };

  /////click on individual caregory
  const handleIndividualEditClick = (workItem, event) => {
    setWorkItem({ ...workItem, category: event.target.value });
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const uniqueCategories = new Set();
    workItemList.forEach((workItem) => {
      uniqueCategories.add(workItem.category);
    });
    const test = Array.from(uniqueCategories).map((uniqueCategory) => {
      return { id: uuidv4(), category: uniqueCategory };
    });

    setCategories([{ id: uuidv4(), category: "" }, ...test]);
  }, [workItemList]);

  const renderedOptions = categories.map(({ category, id }) => {
    return (
      <input
        style={{ display: "flex", flexDirection: "columm" }}
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
      <div style={{ position: "relative" }}>
        <DropdownMenu
          type="button"
          onClick={handleDropdownClick}
          value={workItem.category}
          name="category"
          style={{ width: width }}
        />

        {isDropdownVisible ? (
          <DropdownArea>
            <div>
              <input
                onChange={handleInputFieldChange}
                type="text"
                value={newCategory}
                style={{ borderRadius: "16px" }}
              />
              <button onClick={handleAddClick}>add</button>
            </div>
            <div>{renderedOptions}</div>
          </DropdownArea>
        ) : null}
      </div>
    </>
  );
};

const DropdownMenu = styled.input``;
const DropdownArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
