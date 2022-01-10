import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";

export const BarChart = ({ ui }) => {
  const uniqueWeekDays = new Set();

  ui.forEach((item) => {
    uniqueWeekDays.add(item.dayOfWeek);
  });

  const uniqueWeekDaysMapped = Array.from(uniqueWeekDays).map(
    (uniqueWeekDay) => {
      let summedUpTime = 0;
      let test = ui.forEach((item) => {
        if (uniqueWeekDay === item.dayOfWeek) {
          summedUpTime += item.time;
        }
      });
      return { uniqueWeekDay: uniqueWeekDay, summedUpTime: summedUpTime };
    }
  );

  const data = {
    labels: uniqueWeekDaysMapped.map((item) => item.uniqueWeekDay),

    datasets: [
      {
        data: uniqueWeekDaysMapped.map((item) => item.summedUpTime),

        backgroundColor: ["red"],
        borderWidth: 3,
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
