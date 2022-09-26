import React from "react";
import "./arrowindicator.scss";
import { LightenDarkenColor } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { setDataType } from "../../feautures/balance/balanceSlice";

const ArrowIndicator = ({
  icon,
  iconColor,
  backgroundColor,
  size,
  circle,
  type,
}) => {
  const { darkMode } = useSelector((store) => store.balance);
  // backgroundColor must be in hex format (including #)
  const lighterBackground = LightenDarkenColor(backgroundColor, 50);
  const darkerBorder = LightenDarkenColor(backgroundColor, 30);

  const dispatch = useDispatch();

  const sendDataType = () => {
    dispatch(setDataType(type));
  };

  return (
    <div
      className={`arrowIndicator ${darkMode && "darkMode"}`}
      onClick={sendDataType}
      style={{
        color: iconColor,
        background: `linear-gradient(to bottom, ${backgroundColor},${lighterBackground})`,
        border: `3px solid ${darkerBorder}`,
        width: `${size}`,
        height: `${size}`,
        borderRadius: `${circle && "50%"}`,
        cursor: `${type ? "pointer" : "auto"}`,
      }}
    >
      <div className='icon'>{icon}</div>
    </div>
  );
};

ArrowIndicator.defaultProps = {
  iconColor: "white",
  backgroundColor: "#24B3D3",
  size: "30px",
  circle: false,
};

export default ArrowIndicator;
