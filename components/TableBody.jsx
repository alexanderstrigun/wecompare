import { GrEdit } from "react-icons/gr";
import { GrTrash } from "react-icons/gr";
import styled from "styled-components";

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
                <Button
                  onClick={() => handleEditItemClick(id, data)}
                  disabled={isOverlayOpen}
                >
                  <GrEdit></GrEdit>
                </Button>
                <Button
                  onClick={() => handleRemoveClick(index)}
                  disabled={isOverlayOpen}
                >
                  <GrTrash></GrTrash>
                </Button>
              </div>
            ) : null}
          </td>
        </tr>
      );
    }
  );

  return <tbody>{tableBodyRows}</tbody>;
};

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  border-radius: 20px;
`;
