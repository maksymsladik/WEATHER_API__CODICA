import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { WeatherForecastData, TableProps } from "../../../../interfaces";
import style from "./style.module.css";

function helper(data: Array<WeatherForecastData>, day: string) {
  return data.filter((item) => item.day === day);
}

const Table: React.FC<TableProps> = ({ weatherForecast, selectedDay }) => {
  const data = helper(weatherForecast, selectedDay);

  const renderBarChart = (
    <BarChart width={(1176 / 8) * data.length} height={500} data={data}>
      <XAxis dataKey="time" stroke="#8884d8" />
      <YAxis />
      <Tooltip
        formatter={(c: number) => `${c} \u00B0С`}
        labelFormatter={(time) => `time : ${time}`}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="degrees" fill="#8884d8" barSize={30} />
    </BarChart>
  );

  return <div className={style.table}>{renderBarChart}</div>;
};

export default Table;
