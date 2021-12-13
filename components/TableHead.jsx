import { useCheckAll } from "../utils/useCheckAll";
import { useSort } from "../utils/useSort";

export const TableHead = ({ data, setData, hasCheckbox, fontSize }) => {
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
            />
          </th>
        ) : null}
        <th>
          What
          <button onClick={() => requestSort("what")}>test</button>
        </th>
        <th>
          Category <button onClick={() => requestSort("category")}>test</button>
        </th>
        <th>
          Time <button onClick={() => requestSort("time")}>test</button>
        </th>
      </tr>
    </thead>
  );
};
