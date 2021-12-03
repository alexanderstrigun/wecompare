import { createContext, useContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const workItemContext = createContext();

export const WorkItemProvider = ({ children }) => {
  const [workItemList, setWorkItemList] = useState([]);

  const insertWorkItem = (newItem) => {
    setWorkItemList([{ id: uuidv4(), ...newItem }, ...workItemList]);
  };
  return (
    <workItemContext.Provider value={[workItemList, insertWorkItem]}>
      {children}
    </workItemContext.Provider>
  );
};

export const useWorkItemContext = () => {
  return useContext(workItemContext);
};
