import React from "react";
import randomColor from "randomcolor";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./Redux/color/colorSlice";

import "../App.css";

const Aside = () => {
  //useSelector id to get initial State Value
  //to show the initial value
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  const random = randomColor();
  const changeTextColor = () => {
    dispatch(changeColor({ color: random }));
  };

  return (
    <div className="aside">
      <h2 style={{ color }}>Aside</h2>
      <button onClick={changeTextColor}>Change Color</button>
    </div>
  );
};

export default Aside;
