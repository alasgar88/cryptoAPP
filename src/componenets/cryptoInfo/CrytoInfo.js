import React from "react";
import "./cryptoinfo.scss";
import { Header, CardComponent, ChartContainer, ButtonContainer } from "../";
const CrytoInfo = () => {
  return (
    <div className='cryptoInfo'>
      <Header type='crypto' />
      <CardComponent />
      <div className='chartBlock'>
        <ChartContainer />
        <ChartContainer />
        <ButtonContainer type='crypto' />
      </div>
    </div>
  );
};

export default CrytoInfo;
