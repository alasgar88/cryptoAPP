import React, { useState } from "react";
import "./header.scss";
import image from "../../assets/images/profile.jpg";
import { TbGridDots } from "react-icons/tb";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleDarkMode,
  toggleLightMode,
} from "../../feautures/balance/balanceSlice";

const Header = ({ type }) => {
  const [show, setShow] = useState(false);
  const { darkMode } = useSelector((store) => store.balance);
  const { lightMode } = useSelector((store) => store.balance);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
    setTimeout(() => {
      // setShow(oldValue);
      setShow((oldVale) => {
        setShow(!oldVale);
      });
    }, 4000);
  };

  return (
    <div className='header'>
      <div className='toggle-container'>
        <button
          onClick={handleClick}
          className={`toggle ${
            darkMode ? "darkMode" : lightMode && "lightMode"
          }`}
        >
          <TbGridDots />
        </button>
        <div className={`toggle ${darkMode && "darkMode"}`}></div>
        <button
          className={`toggle-menu ${show && "show"} ${
            darkMode ? "darkMode" : lightMode && "lightMode"
          }`}
        >
          {type === "balance" ? (
            darkMode ? (
              <BsSunFill
                style={{ fontSize: "20px", color: "white" }}
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
                className='sun'
              />
            ) : (
              <BsFillMoonStarsFill
                style={{ fontSize: "20px", color: "#736CB7" }}
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
              />
            )
          ) : lightMode ? (
            <BsFillMoonStarsFill
              style={{ fontSize: "20px", color: "#736CB7" }}
              onClick={() => {
                dispatch(toggleLightMode());
              }}
              className='sun'
            />
          ) : (
            <BsSunFill
              style={{ fontSize: "20px", color: "white" }}
              onClick={() => {
                dispatch(toggleLightMode());
              }}
            />
          )}
        </button>
      </div>
      <div className='profile'>
        <img src={image} alt='profile' className='profile-image' />
      </div>
    </div>
  );
};

export default Header;
