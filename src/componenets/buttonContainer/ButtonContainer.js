import React from "react";
import "./button-container.scss";
import { ArrowIndicator } from "../";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";
import { BiDoughnutChart } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { useSelector } from "react-redux";

const ButtonContainer = ({ type }) => {
  const { darkMode } = useSelector((store) => store.balance);
  const { lightMode } = useSelector((store) => store.balance);
  const icon = type === "balance" ? <FaChartArea /> : <AiOutlineLineChart />;
  return (
    <div className='button-container'>
      <ArrowIndicator
        icon={<BsFillBarChartLineFill />}
        circle={true}
        type='column2d'
      />
      <div
        className={`bigCircle-container ${
          type === "balance" ? darkMode && "darkMode" : lightMode && "darkMode"
        }`}
      >
        <ArrowIndicator
          className='bigCircle'
          icon={icon}
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
