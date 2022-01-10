import { createContext, useContext } from "react";
import moment from "moment";

import { useLocalStorageTrack } from "../utils/useLocalStorageTrack";

const trackItemContext = createContext();

export const TrackItemProvider = ({ children }) => {
  const [trackItemList, setTrackItemList] = useLocalStorageTrack("trackItems");

  const insertTrackItem = (filteredWorkItems) => {
    console.log(filteredWorkItems);
    const filteredWorkItemsMapped = filteredWorkItems.map((item) => {
      return {
        what: item.what,
        category: item.category,
        time: item.time,
        id: item.id,
        year: moment().year(),
        weekOfYear: moment().week(),
        dayOfMonth: moment().date(),
        dayOfWeek: moment().day(),
      };
    });
    console.log(...filteredWorkItemsMapped);
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
