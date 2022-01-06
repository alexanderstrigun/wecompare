import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const Table = ({
  data,
  setData,
  filteredWorkItems,
  hasCheckbox,
  width,
  isTableEditMode,
  handleEditItemClick,
  isOverlayOpen,
  padding,
  removeWorkItem,
}) => {
  return (
    <>
      <table style={{ width: width, borderSpacing: "0px", padding: padding }}>
        <TableHead
          border={"1px solid black"}
          borderCollapse={"collapse"}
          data={data}
          setData={setData}
          filteredWorkItems={filteredWorkItems}
          hasCheckbox={hasCheckbox}
          fontSize={"0.8rem"}
          isOverlayOpen={isOverlayOpen}
        />
        <TableBody
          data={data}
          setData={setData}
          filteredWorkItems={filteredWorkItems}
          hasCheckbox={hasCheckbox}
          fontSize={"0.7rem"}
          isTableEditMode={isTableEditMode} /////////////////////////
          handleEditItemClick={handleEditItemClick} //////////////////
          isOverlayOpen={isOverlayOpen}
          handleRemoveClick={removeWorkItem}
        />
      </table>
    </>
  );
};
