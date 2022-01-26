import { useCheckAll } from "../utils/useCheckAll";
import { useSort } from "../utils/useSort";
import styled from "styled-components";
import { FaSort } from "react-icons/fa";

export const TableHead = ({
  data,
  setData,
  filteredWorkItems,
  hasCheckbox,
  fontSize,
  isOverlayOpen,
  border,
  borderCollapse,
}) => {
  const { allChecked, toggleAllChecked } = useCheckAll(
    data,
    filteredWorkItems,
    setData
  );
  const { requestSort } = useSort(data, setData);

  return (
    <thead>
      <tr style={{ fontSize: fontSize }}>
        {hasCheckbox ? (
          <th style={{ borderBottom: border, borderCollapse: borderCollapse }}>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={() => {
                toggleAllChecked();
              }}
              disabled={isOverlayOpen}
            />
          </th>
        ) : null}
        <th style={{ borderBottom: border }}>
          What
          <SortButton
            onClick={() => requestSort("what")}
            disabled={isOverlayOpen}
          >
            <FaSort></FaSort>
          </SortButton>
        </th>
        <th style={{ borderBottom: border }}>
          Category{" "}
          <SortButton
            onClick={() => requestSort("category")}
            disabled={isOverlayOpen}
          >
            <FaSort></FaSort>
          </SortButton>
        </th>
        <th style={{ borderBottom: border }}>
          Time{" "}
          <SortButton
            onClick={() => requestSort("time")}
            disabled={isOverlayOpen}
          >
            <FaSort></FaSort>
          </SortButton>
        </th>
      </tr>
    </thead>
  );
};

const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  border-radius: 20px;
`;
