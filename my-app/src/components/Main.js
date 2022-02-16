import React from "react";
import Counter from "./Counter";
import Aside from "./Aside";
import "../App.css";
const Main = () => {
    const mainStyle={display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent: "space-evenly",}
  return (
    <div style={mainStyle}>
      <Counter />
      <Aside />
    </div>
  );
};

export default Main;
