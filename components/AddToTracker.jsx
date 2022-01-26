import styled from "styled-components";
import { useState } from "react";
export const AddToTracker = ({ countSelected, handleClose }) => {
  const [test, setTest] = useState(countSelected);

  const mappedCounSelected = countSelected.map((item) => {
    return (
      <>
        <li
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {item.what} ({item.category}){" "}
          <div>
            <button>+</button>
            <input style={{ width: "2rem" }}></input>
            <button>-</button>
          </div>
        </li>
      </>
    );
  });
  return (
    <Div>
      <ul>{mappedCounSelected}</ul>
      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-around",
        }}
      >
        <button>Add</button>
        <button onClick={() => handleClose()}>Cancel</button>
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
