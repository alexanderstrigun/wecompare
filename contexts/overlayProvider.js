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

  const [isAddToTrackerOverlayOpen, setIsAddToTrackerOverlayOpen] =
    useState(false);

  const openAddToTrackerOverlay = () => {
    setIsAddToTrackerOverlayOpen(true);
  };

  const closeAddToTrackerOverlay = () => {
    setIsEditMode(false);
    setIsOverlayOpen(false);
    setIsAddToTrackerOverlayOpen(false);
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

    setIsEditMode(true);
    setInitialAddValue(found);
    setIsOverlayOpen(true);
  };

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
        isAddToTrackerOverlayOpen,
        openAddToTrackerOverlay,
        closeAddToTrackerOverlay,
      ]}
    >
      {children}
    </overlayContext.Provider>
  );
};

export const useOverlayContext = () => {
  return useContext(overlayContext);
};
