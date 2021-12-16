import { createContext, useContext } from "react";
import { useState } from "react";

const overlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const openOverlay = () => {
    setIsOverlayOpen(true);
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setIsEditMode(false);
  };

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
    console.log(workItemList);
    console.log(found);
    setIsEditMode(true);
    setInitialAddValue(found);
    setIsOverlayOpen(true);
  };
  console.log(initialAddValue);
  return (
    <overlayContext.Provider
      value={[
        isOverlayOpen,
        openOverlay,
        closeOverlay,
        isTableEditMode,
        handleEditButtonClick,
        initialAddValue,
        isEditMode,
        setIsEditMode,
        handleEditButtonSingleItemClick,
      ]}
    >
      {children}
    </overlayContext.Provider>
  );
};

export const useOverlayContext = () => {
  return useContext(overlayContext);
};
