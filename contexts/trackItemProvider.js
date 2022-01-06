import { createContext, useContext } from "react";

import { useLocalStorageTrack } from "../utils/useLocalStorageTrack";

const trackItemContext = createContext();

export const TrackItemProvider = ({ children }) => {
  const [trackItemList, setTrackItemList] = useLocalStorageTrack("trackItems");

  const insertTrackItem = (filteredWorkItems) => {
    const date = new Date();
    const filteredWorkItemsMapped = filteredWorkItems.map((item) => {
      return [
        {
          what: item.what,
          category: item.category,
          time: item.time,
          id: item.id,
          date: date,
        },
      ];
    });

    setTrackItemList([...filteredWorkItemsMapped, ...trackItemList]);
  };

  return (
    <trackItemContext.Provider value={[trackItemList, insertTrackItem]}>
      {children}
    </trackItemContext.Provider>
  );
};

export const useTrackItemContext = () => {
  return useContext(trackItemContext);
};
