import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useBarchartData } from "../utils/useBarchartData";

export const BarChart = ({ ui }) => {
  const [
    selectedYear,
    selectedWeek,
    data,
    renderedOptionsWeeks,
    renderedOptionsYears,
    handleWeekClick,
    handleYearClick,
  ] = useBarchartData(ui);

  return (
    <>
      <select
        value={selectedWeek}
        onChange={(event) => {
          handleWeekClick(event.target.value);
        }}
      >
        {renderedOptionsWeeks}
      </select>
      <select
        value={selectedYear}
        onChange={(event) => {
          handleYearClick(event.target.value);
        }}
      >
        {renderedOptionsYears}
      </select>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: false,
              text: "test",
            },
            legend: {
              display: false,
              position: "bottom",
            },
          },
        }}
      />
    </>
  );
};
