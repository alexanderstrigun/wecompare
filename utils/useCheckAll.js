import { useState, useEffect } from "react";

export const useCheckAll = (data, filteredData, setData) => {
  const [allChecked, setAllChecked] = useState(false);

  const toggleAllChecked = () => {
    setAllChecked(!allChecked);
  };

  useEffect(() => {
    const mappedWithCheckBoxes = filteredData.map((item) => {
      if (allChecked === true) {
        return { ...item, isChecked: true };
      } else {
        return { ...item, isChecked: false };
      }
    });

    const test = data.map((item) => {
      const a = mappedWithCheckBoxes.find((o) => {
        if (o.id === item.id) return o;
      });
      return a || item;
    });

    setData(test);
  }, [allChecked]);

  return {
    allChecked,
    toggleAllChecked,
  };
};
