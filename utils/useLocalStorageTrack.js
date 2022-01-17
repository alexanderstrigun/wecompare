////try to put the useeffects for local storage into custom hook. no success yet
import { useState, useEffect } from "react";
import { defaultTrackItems } from "./defaultTrackItems";

export const useLocalStorageTrack = (key) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem(key);
    if (dataLocalStorage) {
      setData(JSON.parse(dataLocalStorage));
    } else setData(defaultTrackItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
