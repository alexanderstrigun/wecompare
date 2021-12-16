import { useCheckAll } from "../utils/useCheckAll";
import { useSort } from "../utils/useSort";

export const TableHead = ({
  data,
  setData,
  hasCheckbox,
  fontSize,
  isOverlayOpen,
}) => {
  const { allChecked, toggleAllChecked } = useCheckAll(data, setData);
  const { requestSort } = useSort(data, setData);

  return (
    <thead>
      <tr style={{ fontSize: fontSize }}>
        {hasCheckbox ? (
          <th>
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
        <th>
          What
          <button onClick={() => requestSort("what")} disabled={isOverlayOpen}>
            test
          </button>
        </th>
        <th>
          Category{" "}
          <button
            onClick={() => requestSort("category")}
            disabled={isOverlayOpen}
          >
            test
          </button>
        </th>
        <th>
          Time{" "}
          <button onClick={() => requestSort("time")} disabled={isOverlayOpen}>
            test
          </button>
        </th>
      </tr>
    </thead>
  );
};
