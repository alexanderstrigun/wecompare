export const TableBody = ({
  data,
  setData,
  filteredWorkItems,
  hasCheckbox,
  fontSize,
  isTableEditMode,
  handleEditItemClick,
  isOverlayOpen,
}) => {
  const toggleChecked = (id) => {
    const copy = [...data];
    const clickedElement = copy.find((item) => item.id === id);
    clickedElement.isChecked = !clickedElement.isChecked;
    setData(copy);
  };

  const tableBodyRows = filteredWorkItems.map(
    ({ what, category, time, id, isChecked }) => {
      return (
        <tr key={id} style={{ fontSize: fontSize }}>
          {hasCheckbox ? (
            <td>
              <input
                type="checkbox"
                onChange={() => {
                  toggleChecked(id);
                }}
                checked={isChecked}
                disabled={isOverlayOpen}
              />
            </td>
          ) : null}
          <td>{what}</td>
          <td>{category}</td>
          <td>{time}</td>
          <td>
            {isTableEditMode ? (
              <button
                onClick={() => handleEditItemClick(id, data)}
                disabled={isOverlayOpen}
              >
                Edit
              </button>
            ) : null}
          </td>
        </tr>
      );
    }
  );

  return <tbody>{tableBodyRows}</tbody>;
};
