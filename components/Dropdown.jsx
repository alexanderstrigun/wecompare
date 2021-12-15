import { useState, useEffect } from "react";
import { useWorkItemContext } from "../contexts/workItemProvider";
import { v4 as uuidv4 } from "uuid";

export const Dropdown = () => {
  const [workItemList, insertWorkItem, setWorkItemList, updateWorkItem] =
    useWorkItemContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [categories, setCategories] = useState([]);

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
    return <button key={id}>{category}</button>;
  });

  const handleDropdownClick = (event) => {
    event.preventDefault();
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <button onClick={handleDropdownClick}>test</button>
      {isDropdownVisible ? (
        <div>
          <input type="text" />
          <div>{renderedOptions}</div>
        </div>
      ) : null}
    </>
  );
};
