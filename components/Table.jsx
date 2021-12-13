import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const Table = ({
  data,
  setData,
  hasCheckbox,
  width,
  isTableEditMode,
  handleEditItemClick,
}) => {
  return (
    <table style={{ width: width }}>
      <TableHead
        data={data}
        setData={setData}
        hasCheckbox={hasCheckbox}
        fontSize={"0.5rem"}
      />
      <TableBody
        data={data}
        setData={setData}
        hasCheckbox={hasCheckbox}
        fontSize={"0.5rem"}
        isTableEditMode={isTableEditMode} /////////////////////////
        handleEditItemClick={handleEditItemClick} //////////////////
      />
    </table>
  );
};
