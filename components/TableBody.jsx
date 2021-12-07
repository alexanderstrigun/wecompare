export const TableBody = ({ data, setData, hasCheckbox }) => {
  const toggleChecked = (id) => {
    const copy = [...data];
    const clickedElement = copy.find((item) => item.id === id);
    clickedElement.isChecked = !clickedElement.isChecked;
    setData(copy);
  };

  const tableBodyRows = data.map(({ what, category, time, id, isChecked }) => {
    return (
      <tr key={id}>
        {hasCheckbox ? (
          <td>
            <input
              type="checkbox"
              onChange={() => {
                toggleChecked(id);
              }}
              checked={isChecked}
            />
          </td>
        ) : null}
        <td>{what}</td>
        <td>{category}</td>
        <td>{time}</td>
      </tr>
    );
  });

  return <tbody>{tableBodyRows}</tbody>;
};
