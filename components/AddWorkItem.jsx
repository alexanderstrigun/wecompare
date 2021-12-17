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
  console.log(workItem);
  return (
    <Form>
      <button
        onClick={() => {
          handleCloseClick();
        }}
      >
        Close
      </button>
      <div>
        <Label htmlFor="what">What?</Label>
        <input
          onChange={handleChange}
          type="text"
          id="what"
          name="what"
          value={workItem.what}
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Dropdown
          setWorkItem={setWorkItem}
          workItemList={workItemList}
          workItem={workItem}
        />
      </div>
      <div>
        <Label htmlFor="time">Estimated time[min]</Label>
        <input
          onChange={handleChange}
          type="text"
          id="time"
          name="time"
          value={workItem.time}
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
  top: 100px;
  background-color: white;
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
