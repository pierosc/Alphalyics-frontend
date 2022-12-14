import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData,ref }) {
  return <Line ref={ref} data={chartData} options={{
    plugins: {
      title: {
        display: false,
        text: "Users Gained between 2016-2020"
      },
      legend: {
        display: false,
        onClick:()=>{}
      }
    }
  }}/>;
}

export default LineChart;
