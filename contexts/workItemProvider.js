import { createContext, useContext } from "react";
import { useState } from "react";

const workItemContext = createContext();

export const WorkItemProvider = ({ children }) => {
  const [workItemList, setWorkItemList] = useState("");

  const insertWorkItem = (newItem) => {
    setWorkItemList([{ ...newItem }, ...workItemList]);
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
