export const EditWorkItem = ({ handleClick, isOverlayOpen }) => {
  return (
    <button onClick={handleClick} disabled={isOverlayOpen}>
      Edit
    </button>
  );
};
