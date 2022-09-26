import React from "react";
import "./dashboard.scss";
import { CrytoInfo, Balance } from "../../componenets";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { darkMode } = useSelector((store) => store.balance);
  const { lightMode } = useSelector((store) => store.balance);

  return (
    <div className='main'>
      <div className='circle'>
        <div className='dashboard-container'>
          <div
            className={`dashboard balance-dashboard ${darkMode && "darkMode"}`}
          >
            <Balance />
          </div>
          <div
            className={`dashboard cryptoinfo-dashboard ${
              lightMode && "lightMode"
            }`}
          >
            <CrytoInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
