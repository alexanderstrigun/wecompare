import { useWorkItemContext } from "../contexts/workItemProvider";
import { useEffect, useState } from "react";
import { Table } from "./Table";

export const SearchableTable = ({
  isTableEditMode,
  handleEditItemClick,
  isOverlayOpen,
}) => {
  const [
    workItemList,
    insertWorkItem,
    setWorkItemList,
    updateWorkItem,
    removeWorkItem,
  ] = useWorkItemContext();

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredWorkItems = workItemList.filter((workItem) => {
    return (
      workItem.what.toLowerCase().includes(searchField.toLowerCase()) ||
      workItem.category.toLowerCase().includes(searchField.toLowerCase()) ||
      workItem.time.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
    <>
      <input type="text" onChange={handleChange} />
      <Table
        data={workItemList}
        setData={setWorkItemList}
        filteredWorkItems={filteredWorkItems}
        hasCheckbox={true}
        width={"100%"}
        padding={"0rem"}
        isTableEditMode={isTableEditMode}
        handleEditItemClick={handleEditItemClick}
        isOverlayOpen={isOverlayOpen}
        removeWorkItem={removeWorkItem}
      ></Table>
    </>
  );
};
