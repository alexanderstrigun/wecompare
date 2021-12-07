import { createContext, useContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const workItemContext = createContext();

export const WorkItemProvider = ({ children }) => {
  const [workItemList, setWorkItemList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const insertWorkItem = (newItem) => {
    setWorkItemList([{ id: uuidv4(), ...newItem }, ...workItemList]);
  };

  const toggleChecked = (id) => {
    const copy = [...workItemList];
    const clickedElement = copy.find((item) => item.id === id);
    clickedElement.isChecked = !clickedElement.isChecked;
    setWorkItemList(copy);
  };

  const toggleAllChecked = () => {
    setAllChecked(!allChecked);
  };

  return (
    <workItemContext.Provider
      value={[
        workItemList,
        insertWorkItem,
        toggleChecked,
        toggleAllChecked,
        allChecked,
        setWorkItemList,
      ]}
    >
      {children}
    </workItemContext.Provider>
  );
};

export const useWorkItemContext = () => {
  return useContext(workItemContext);
};
