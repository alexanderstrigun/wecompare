import { useState, useEffect } from "react";

export const TableSort = ({ data, setData }) => {
  const [sortDirection, setSortDirection] = useState(null);

  const sortData = () => {
    if (sortDirection === "ascending") {
      setSortDirection("descending");
    } else if (sortDirection === "descending") {
      setSortDirection("ascending");
    } else {
      setSortDirection("ascending");
    }
  };

  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.what < b.what) {
      return sortDirection === "ascending" ? -1 : 1;
    } else if (a.what > b.what) {
      return sortDirection === "ascending" ? 1 : -1;
    }
  });

  useEffect(() => {
    setData(sortedData);
  }, [sortDirection]);

  return <button onClick={() => sortData()}>test</button>;
};
