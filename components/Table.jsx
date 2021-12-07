import { useEffect } from "react";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const Table = ({ data, setData, hasCheckbox, width }) => {
  return (
    <table style={{ width: width }}>
      <TableHead data={data} setData={setData} hasCheckbox={hasCheckbox} />
      <TableBody data={data} setData={setData} hasCheckbox={hasCheckbox} />
    </table>
  );
};
