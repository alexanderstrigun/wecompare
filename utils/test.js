import * as d3 from "d3";

const test = d3
  .select("div")
  .selectAll("p")
  .data([1, 2, 3])
  .enter()
  .append("p");
