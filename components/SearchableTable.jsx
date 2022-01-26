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
  const [hasFocus, setFocus] = useState(false);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };

  const filteredWorkItems = workItemList.filter((workItem) => {
    return (
      workItem.what.toLowerCase().includes(searchField.toLowerCase()) ||
      workItem.category.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={hasFocus ? "" : "Search work item"}
      />
      <Table
        data={workItemList}
        setData={setWorkItemList}
        filteredWorkItems={filteredWorkItems}
        hasCheckbox={true}
        width={"100%"}
        padding={"1rem"}
        isTableEditMode={isTableEditMode}
        handleEditItemClick={handleEditItemClick}
        isOverlayOpen={isOverlayOpen}
        removeWorkItem={removeWorkItem}
      ></Table>
    </>
  );
};
