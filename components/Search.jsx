import { useWorkItemContext } from "../contexts/workItemProvider";
import { useEffect, useState } from "react";

export const Search = () => {
  const [workItemList, insertWorkItem, setWorkItemList, updateWorkItem] =
    useWorkItemContext();

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
    console.log(filteredWorkItems);
  };

  const filteredWorkItems = workItemList.filter((workItem) => {
    return (
      workItem.what.toLowerCase().includes(searchField.toLowerCase()) ||
      workItem.category.toLowerCase().includes(searchField.toLowerCase()) ||
      workItem.time.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  );
};
