import React from "react";
import "./chart-container.scss";
import { LineChart } from "../";

const ChartContainer = () => {
  return (
    <div className='chartContainer'>
      <div className='crypto-container'></div>
      <LineChart />
      <div className='crypto-container'></div>
    </div>
  );
};

export default ChartContainer;
