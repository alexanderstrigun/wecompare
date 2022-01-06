import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../utils/useLocalStorage";

const workItemContext = createContext();

export const WorkItemProvider = ({ children }) => {
  const [workItemList, setWorkItemList] = useLocalStorage("workItems");

  const insertWorkItem = (newItem) => {
    setWorkItemList([{ id: uuidv4(), ...newItem }, ...workItemList]);
  };

  const updateWorkItem = (item) => {
    let index = workItemList.findIndex((element) => {
      return element.id === item.id;
    });
    const front = workItemList.slice(0, index);
    const back = workItemList.slice(index + 1, workItemList.length - index + 1);
    setWorkItemList([...front, item, ...back]);
  };

  const removeWorkItem = (index) => {
    const front = workItemList.slice(0, index);
    const back = workItemList.slice(index + 1, workItemList.length);
    setWorkItemList([...front, ...back]);
  };

  return (
    <workItemContext.Provider
      value={[
        workItemList,
        insertWorkItem,
        setWorkItemList,
        updateWorkItem,
        removeWorkItem,
      ]}
    >
      {children}
    </workItemContext.Provider>
  );
};

export const useWorkItemContext = () => {
  return useContext(workItemContext);
};
