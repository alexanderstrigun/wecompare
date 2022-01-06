import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";

export const BarChart = ({ ui }) => {
  const data = {
    labels: ui.map((item) => item.label),

    datasets: [
      {
        label: "Popularity of colours",
        data: ui.map((item) => item.value),

        backgroundColor: ["red"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {" "}
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices",
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
