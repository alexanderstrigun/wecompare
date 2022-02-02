import styled from "styled-components";
import { useTrackItemContext } from "../contexts/trackItemProvider";
import { useState } from "react";
export const AddToTracker = ({ countSelected, handleClose }) => {
  const [trackItemList, insertTrackItem] = useTrackItemContext();
  const [countSelectEdited, setCountSelectEdited] = useState(countSelected);

  const handlePlusClick = (index) => {
    const copy = [...countSelectEdited];
    copy[index].time += 1;
    setCountSelectEdited(copy);
  };
  console.log(countSelectEdited);
  const handleMinusClick = (index) => {
    const copy = [...countSelectEdited];
    copy[index].time -= 1;
    setCountSelectEdited(copy);
  };

  const handleCancelClick = () => {
    handleClose(), setCountSelectEdited(countSelected);
  };

  const handleInputChange = (event, index) => {
    const copy = [...countSelectEdited];
    copy[index].time = event.target.value;
    setCountSelectEdited(copy);
  };
  console.log(countSelectEdited);
  const mappedCountSelectedNext = countSelectEdited.map((item, index) => {
    return (
      <li
        key={item.id}
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {item.what} ({item.category}){" "}
        <div>
          <button
            onClick={() => {
              handlePlusClick(index);
            }}
          >
            +
          </button>
          <input
            style={{ width: "2rem" }}
            value={item.time}
            onChange={(event) => {
              handleInputChange(event, index);
            }}
          ></input>
          <button
            onClick={() => {
              handleMinusClick(index);
            }}
          >
            -
          </button>
        </div>
      </li>
    );
  });
  return (
    <Div>
      <ul>{mappedCountSelectedNext}</ul>
      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={() => {
            insertTrackItem(countSelectEdited);
            handleCancelClick();
          }}
        >
          Add
        </button>
        <button onClick={() => handleCancelClick()}>Cancel</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
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
