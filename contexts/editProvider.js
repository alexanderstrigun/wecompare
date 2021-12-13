import { createContext, useContext } from "react";
import { useState } from "react";

const editContext = createContext();

export const EditProvider = ({ children }) => {
  /////define whether edit items are visible in table
  const [isTableEditMode, setIsTableEditMode] = useState(false);
  const handleEditButtonClick = () => {
    setIsTableEditMode(!isTableEditMode);
  };

  const [initialAddValue, setInitialAddValue] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditButtonSingleItemClick = (id, workItemList) => {
    const found = workItemList.find((element) => {
      return element.id === id;
    });
    setIsEditMode(true);
    setInitialAddValue(found);
    setIsOverlayOpen(true);
  };

  return (
    <editContext.Provider
      value={[
        isTableEditMode,
        handleEditButtonClick,
        initialAddValue,
        isEditMode,
        setIsEditMode,
        handleEditButtonSingleItemClick,
      ]}
    >
      {children}
    </editContext.Provider>
  );
};

export const useEditContext = () => {
  return useContext(editContext);
};
