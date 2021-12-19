import { useState } from "react";
import styled from "styled-components";
import { useWorkItemContext } from "../contexts/workItemProvider";
import { Dropdown } from "./Dropdown";

export const AddWorkItem = ({
  initialAddValue,
  handleCloseClick,
  isEditMode,
}) => {
  const [workItemList, insertWorkItem, setWorkItemList, updateWorkItem] =
    useWorkItemContext();

  const [workItem, setWorkItem] = useState(
    initialAddValue ?? {
      what: "",
      category: "",
      time: "",
      isChecked: false,
    }
  );

  const handleSubmit = (workItem) => {
    isEditMode ? updateWorkItem(workItem) : insertWorkItem(workItem);
  };

  const handleChange = (event) => {
    setWorkItem({
      ...workItem,
      [event.target.name]: event.target.value,
    });
  };
  const style = { display: "flex", flexDirection: "column" };
  const width = "60vw";
  return (
    <Form>
      <button
        onClick={() => {
          handleCloseClick();
        }}
      >
        Close
      </button>
      <div style={style}>
        <Label htmlFor="what">What?</Label>
        <input
          onChange={handleChange}
          type="text"
          id="what"
          name="what"
          value={workItem.what}
          style={{ width: width }}
        />
      </div>
      <div style={style}>
        <Label htmlFor="category">Category</Label>
        <Dropdown
          setWorkItem={setWorkItem}
          workItemList={workItemList}
          workItem={workItem}
          width={width}
        />
      </div>
      <div style={style}>
        <Label htmlFor="time">Estimated time[min]</Label>
        <input
          onChange={handleChange}
          type="text"
          id="time"
          name="time"
          value={workItem.time}
          style={{ width: width }}
        />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(workItem);
        }}
        type="submit"
      >
        {isEditMode ? "Save" : "Add"}
      </button>
    </Form>
  );
};

const Form = styled.form`
  position: absolute;
  border-radius: 10px;
  border-color: grey;
  top: 100px;
  background-color: #e7fbff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  width: 100vw;
  height: 60vh;
`;

const Label = styled.label`
  display: block;
`;
