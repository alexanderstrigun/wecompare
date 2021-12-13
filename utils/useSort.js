import { useState, useEffect } from "react";

export const useSort = (data, setData) => {
  const [sortConfig, setSortConfig] = useState({
    columnKey: null,
    direction: null,
  });

  const requestSort = (name) => {
    if (sortConfig.direction === "ascending") {
      setSortConfig({ columnKey: name, direction: "descending" });
    } else if (sortConfig.direction === "descending") {
      setSortConfig({ columnKey: name, direction: "ascending" });
    } else {
      setSortConfig({ columnKey: name, direction: "ascending" });
    }
  };

  const sortedData = [...data];
  console.log(data);
  sortedData.sort((a, b) => {
    if (a[sortConfig.columnKey] < b[sortConfig.columnKey]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    } else if (a[sortConfig.columnKey] > b[sortConfig.columnKey]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
  });

  useEffect(() => {
    setData(sortedData);
  }, [sortConfig]);

  return {
    requestSort,
  };
};
