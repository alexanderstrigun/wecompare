import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BarChart = ({ ui }) => {
  const [optionsYears, setOptionsYears] = useState([]);
  const [optionsWeeks, setOptionsWeeks] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedWeek, setSelectedWeek] = useState();
  const [filteredDataSet, setFilteredDataSet] = useState([]);

  const handleWeekClick = (test) => {
    setSelectedWeek(test);
  };

  const handleYearClick = (test) => {
    setSelectedYear(test);
  };

  const renderedOptionsWeeks = optionsWeeks.map((week) => {
    return (
      <option key={week.id} value={week.week}>
        {week.week}
      </option>
    );
  });

  const renderedOptionsYears = optionsYears.map((year) => {
    return (
      <option key={year.id} value={year.year}>
        {year.year}
      </option>
    );
  });

  useEffect(() => {
    const uniqueWeeks = new Set();
    const uniqueYears = new Set();

    ui.forEach((item) => {
      uniqueWeeks.add(item.weekOfYear);
      uniqueYears.add(item.year);
    });

    const weeks = Array.from(uniqueWeeks).map((uniqueWeek) => {
      return { week: uniqueWeek, id: uuidv4() };
    });

    const years = Array.from(uniqueYears).map((uniqueYear) => {
      return { year: uniqueYear, id: uuidv4() };
    });

    setOptionsWeeks(weeks);
    setOptionsYears(years);
    setSelectedYear(Math.max(...Array.from(uniqueYears)));
    setSelectedWeek(Math.max(...Array.from(uniqueWeeks)));
  }, [ui]);

  useEffect(() => {
    const uniqueWeekDays = new Set();
    const uiFiltered = ui.filter((item) => {
      return item.year == selectedYear && item.weekOfYear == selectedWeek;
    });
    uiFiltered.forEach((item) => {
      uniqueWeekDays.add(item.dayOfWeek);
    });

    const uniqueWeekDaysMapped = Array.from(uniqueWeekDays).map(
      (uniqueWeekDay) => {
        let summedUpTime = 0;
        uiFiltered.forEach((item) => {
          if (uniqueWeekDay === item.dayOfWeek) {
            summedUpTime += item.time;
          }
        });
        return { uniqueWeekDay: uniqueWeekDay, summedUpTime: summedUpTime };
      }
    );
    setFilteredDataSet(uniqueWeekDaysMapped);
  }, [selectedYear, selectedWeek]);

  const data = {
    labels: filteredDataSet.map((item) => item.uniqueWeekDay),

    datasets: [
      {
        data: filteredDataSet.map((item) => item.summedUpTime),

        backgroundColor: ["red"],
        borderWidth: 3,
      },
    ],
  };

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
