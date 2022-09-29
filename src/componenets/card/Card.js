import React from "react";
import "./card.scss";
import { GoFlame } from "react-icons/go";
import { useSelector } from "react-redux";

const CardComponent = () => {
  const { lightMode } = useSelector((store) => store.balance);

  return (
    <div className='card-container'>
      <div className={`card-first ${lightMode && "lightMode"}`}>
        <div className='icon'>
          <GoFlame />
        </div>
        <div className='amount'>11.670,90</div>
        <div className='currency'>USD</div>
        <div className='balance-two'>$9839.8</div>
        <div className='balance-change'>+8,1%</div>
      </div>
      <div className={`card-second ${lightMode && "lightMode"}`}></div>
      <div className={`card-third ${lightMode && "lightMode"}`}></div>
    </div>
  );
};

export default CardComponent;
