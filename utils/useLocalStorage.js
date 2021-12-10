////try to put the useeffects for local storage into custom hook. no success yet
import { useState, useEffect } from "react";
import { defaultWorkItem } from "./defaultWorkItems";

export const useLocalStorage = (key) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataLocalStorage = localStorage.getItem(key);
    if (dataLocalStorage) {
      setData(JSON.parse(dataLocalStorage));
    } else {
      setData(defaultWorkItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
