import { useCheckAll } from "../utils/useCheckAll";
import { TableSort } from "./TableSort";

export const TableHead = ({ data, setData, hasCheckbox }) => {
  const { allChecked, toggleAllChecked } = useCheckAll(data, setData);

  return (
    <thead>
      <tr>
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
          What <TableSort data={data} setData={setData} />
        </th>
        <th>Category</th>
        <th>Estimated time</th>
      </tr>
    </thead>
  );
};
