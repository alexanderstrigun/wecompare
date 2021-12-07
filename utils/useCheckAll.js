import { useState, useEffect } from "react";

export const useCheckAll = (data, setData) => {
  const [allChecked, setAllChecked] = useState(false);

  const toggleAllChecked = () => {
    setAllChecked(!allChecked);
  };

  useEffect(() => {
    const mappedWithCheckBoxes = data.map((item) => {
      if (allChecked === true) {
        return { ...item, isChecked: true };
      } else {
        return { ...item, isChecked: false };
      }
    });

    setData(mappedWithCheckBoxes);
  }, [allChecked]);

  return {
    allChecked,
    toggleAllChecked,
  };
};
