export const TableBody = ({
  data,
  setData,
  filteredWorkItems,
  hasCheckbox,
  fontSize,
  isTableEditMode,
  handleEditItemClick,
  isOverlayOpen,
  handleRemoveClick,
}) => {
  const toggleChecked = (id) => {
    const copy = [...data];
    const clickedElement = copy.find((item) => item.id === id);
    clickedElement.isChecked = !clickedElement.isChecked;
    setData(copy);
  };

  const tableBodyRows = filteredWorkItems.map(
    ({ what, category, time, id, isChecked }, index) => {
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
              <div style={{ display: "flex" }}>
                <button
                  onClick={() => handleEditItemClick(id, data)}
                  disabled={isOverlayOpen}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveClick(index)}
                  disabled={isOverlayOpen}
                >
                  Remove
                </button>
              </div>
            ) : null}
          </td>
        </tr>
      );
    }
  );

  return <tbody>{tableBodyRows}</tbody>;
};
