import { createContext, useContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../utils/useLocalStorage";

const workItemContext = createContext();

export const WorkItemProvider = ({ children }) => {
  const [workItemList, setWorkItemList] = useLocalStorage("workItems");

  const insertWorkItem = (newItem) => {
    setWorkItemList([{ id: uuidv4(), ...newItem }, ...workItemList]);
  };

  return (
    <workItemContext.Provider
      value={[workItemList, insertWorkItem, setWorkItemList]}
    >
      {children}
    </workItemContext.Provider>
  );
};

export const useWorkItemContext = () => {
  return useContext(workItemContext);
};
