import { useCheckAll } from "../utils/useCheckAll";
import { useSort } from "../utils/useSort";

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
          <button onClick={() => requestSort("what")} disabled={isOverlayOpen}>
            test
          </button>
        </th>
        <th style={{ borderBottom: border }}>
          Category{" "}
          <button
            onClick={() => requestSort("category")}
            disabled={isOverlayOpen}
          >
            test
          </button>
        </th>
        <th style={{ borderBottom: border }}>
          Time{" "}
          <button onClick={() => requestSort("time")} disabled={isOverlayOpen}>
            test
          </button>
        </th>
      </tr>
    </thead>
  );
};
