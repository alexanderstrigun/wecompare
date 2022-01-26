import { GrEdit } from "react-icons/gr";
import styled from "styled-components";

export const EditWorkItem = ({
  handleClick,
  isOverlayOpen,
  isAddToTrackerOverlayOpen,
}) => {
  return (
    <EditButton
      onClick={handleClick}
      disabled={isOverlayOpen || isAddToTrackerOverlayOpen}
    >
      <GrEdit />
    </EditButton>
  );
};

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  border-radius: 20px;
`;
