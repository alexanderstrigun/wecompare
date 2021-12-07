import { useState, useEffect } from "react";

export const TableSort = ({ data, setData }) => {
  const [sortDirection, setSortDirection] = useState("ascending");

  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.what < b.what) {
      return sortDirection === "ascending" ? -1 : 1;
    } else if (a.what > b.what) {
      return sortDirection === "ascending" ? 1 : -1;
    }
  });

  const sortData = () => {
    if (sortDirection === "ascending") {
      setSortDirection("descending");
    } else if (sortDirection === "descending") {
      setSortDirection("ascending");
    }
    console.log(sortedData);
  };

  useEffect(() => {
    setData(sortedData);
  }, [sortDirection]);

  return <button onClick={() => sortData()}>test</button>;
};
