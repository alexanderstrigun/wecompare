import { useState, useEffect } from "react";
import styled from "styled-components";
import { useWorkItemContext } from "../contexts/workItemProvider";
import { v4 as uuidv4 } from "uuid";

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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      { id: uuidv4(), category: "" },
      ...new Set(
        workItemList.map((item) => {
          return { id: uuidv4(), category: item.category };
        })
      ),
    ]);
  }, [workItemList]);

  const renderedOptions = categories.map(({ category, id }) => {
    return <option key={id}>{category}</option>;
  });

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
