import React from "react";
import "./balance.scss";
import { Header, ArrowIndicator } from "../";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { Chart, ButtonContainer } from "../";
import { useSelector } from "react-redux";

const Balance = () => {
  const { darkMode } = useSelector((store) => store.balance);

  return (
    <div className={`balance ${darkMode && "darkMode"}`}>
      <Header type='balance' />
      <div className='price-container'>
        <div className='price-info'>
          <div className='price'>12.670,90</div>
          <div className='currency'>USD</div>
        </div>
        <div className='balance-container'>
          <div className={`balance-info ${darkMode && "darkMode"}`}>
            $9839.8
          </div>
          <div className={`balance-change ${darkMode && "darkMode"}`}>
            +8.1%
          </div>
        </div>
      </div>
      <div className='date-container'>
        <div className='data-range'>May 26 - July 26</div>
        <div className='select-data'>
          <select className={`select-box ${darkMode && "darkMode"}`}>
            <option value='0'>1 Month</option>
          </select>
        </div>
      </div>
      <div className='spend-earned-container'>
        <div className='arrow-indicator-container'>
          <ArrowIndicator
            icon={<BsArrowUp />}
            iconColor='#BE9B60'
            backgroundColor='#5E4ACA'
            size='30px'
          />
          <div className='info-container'>
            <div className={`title ${darkMode && { darkMode }}`}>Spend</div>
            <div className={`amount ${darkMode && "darkMode"}`}>$1,460</div>
          </div>
        </div>
        <div className='arrow-indicator-container'>
          <ArrowIndicator icon={<BsArrowDown />} />
          <div className='info-container'>
            <div className={`title ${darkMode && { darkMode }}`}>Earned</div>
            <div className='amount earning-amount'>$2,730</div>
          </div>
        </div>
      </div>
      <div className='chart-container'>
        <Chart />
      </div>
      <ButtonContainer type='balance' />
    </div>
  );
};

export default Balance;
