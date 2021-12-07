import { useState } from "react";
import styled from "styled-components";
import { useWorkItemContext } from "../contexts/workItemProvider";
import { renderedOptions } from "../utils/categories";

export const AddWorkItem = () => {
  const [workItemList, insertWorkItem] = useWorkItemContext();

  const [workItem, setWorkItem] = useState({
    what: "",
    category: "",
    time: "",
    isChecked: false,
  });

  const handleChange = (event) => {
    setWorkItem({
      ...workItem,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form>
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
        <select
          onChange={handleChange}
          id="category<"
          name="category"
          value={workItem.category}
        >
          {renderedOptions}
        </select>
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
          insertWorkItem(workItem);
        }}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
};

const Form = styled.form`
  margin: 4% 4% 4% 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  height: 60vh;
`;

const Label = styled.label`
  display: block;
`;
