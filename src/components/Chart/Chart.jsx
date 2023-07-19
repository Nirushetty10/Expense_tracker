import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const maxAmountArray = props.dataPoints.map(expense => expense.value);
  const maxAmount = Math.max(...maxAmountArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.lable} value={dataPoint.value} lable={dataPoint.lable} maxValue={maxAmount} />
      ))}
    </div>
  );
}

export default Chart;
