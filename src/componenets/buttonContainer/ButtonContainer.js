import React from "react";
import "./button-container.scss";
import { ArrowIndicator } from "../";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";
import { BiDoughnutChart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const ButtonContainer = () => {
  const { darkMode } = useSelector((store) => store.balance);
  return (
    <div className='button-container'>
      <ArrowIndicator
        icon={<BsFillBarChartLineFill />}
        circle={true}
        type='column2d'
      />
      <div className={`bigCircle-container ${darkMode && "darkMode"}`}>
        <ArrowIndicator
          className='bigCircle'
          icon={<FaChartArea />}
          iconColor='white'
          backgroundColor='#6354B0'
          size='50px'
          circle={true}
          type='area2d'
        />
      </div>
      <ArrowIndicator
        icon={<BiDoughnutChart />}
        circle={true}
        type='doughnut3d'
      />
    </div>
  );
};

export default ButtonContainer;