import React from "react";
import "./button-container.scss";
import { ArrowIndicator } from "../";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";
import { BiDoughnutChart } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { useSelector } from "react-redux";

const ButtonContainer = ({ type, mode }) => {
  const { darkMode } = useSelector((store) => store.balance);
  const { lightMode } = useSelector((store) => store.balance);
  const icon = type === "balance" ? <FaChartArea /> : <AiOutlineLineChart />;
  console.log(
    type === "balance" ? darkMode && "darkMode" : lightMode && "lightMode",
    type
  );
  return (
    <div className='button-container'>
      <ArrowIndicator
        icon={<BsFillBarChartLineFill />}
        circle={true}
        type='column2d'
        mode={mode}
      />

      <div
        className={`bigCircle-container ${
          type === "balance" ? darkMode && "darkMode" : lightMode && "lightMode"
        }`}
      >
        <ArrowIndicator
          className='bigCircle'
          icon={icon}
          iconColor='white'
          backgroundColor='#6354B0'
          size='50px'
          circle={true}
          // type='area2d'
          type={`${mode === "balance" ? "area2d" : "line"}`}
          mode={mode}
        />
      </div>
      <ArrowIndicator
        icon={<BiDoughnutChart />}
        circle={true}
        type='doughnut3d'
        mode={mode}
      />
    </div>
  );
};

export default ButtonContainer;
