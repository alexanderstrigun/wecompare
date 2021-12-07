import { useWorkItemContext } from "../contexts/workItemProvider";
import { useEffect } from "react";

export const WorkItemList = () => {
  const [
    workItemList,
    insertWorkItem,
    toggleChecked,
    toggleAllChecked,
    allChecked,
    setWorkItemList,
  ] = useWorkItemContext();

  useEffect(() => {
    const mappedWithCheckBoxes = workItemList.map((item) => {
      if (allChecked === true) {
        return { ...item, isChecked: true };
      } else {
        return { ...item, isChecked: false };
      }
    });

    setWorkItemList(mappedWithCheckBoxes);
  }, [allChecked]);

  const renderedRows = workItemList.map(
    ({ what, category, time, id, isChecked }) => {
      return (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              onChange={() => {
                toggleChecked(id);
              }}
              checked={isChecked}
            />
          </td>
          <td>{what}</td>
          <td>{category}</td>
          <td>{time}</td>
        </tr>
      );
    }
  );
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={() => {
                toggleAllChecked();
              }}
            />
          </th>
          <th>What</th>
          <th>Category</th>
          <th>Estimated time</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
