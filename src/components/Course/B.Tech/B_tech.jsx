/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tab from "../Tabs/Tab";
import Year from "./../data/YearData";
import "./btech.css";

const B_tech = ({ duration, currCourse }) => {
  const [yearNo, setYearNo] = useState(1);
  return (
    <div className="Btech-main">
      <Tab duration={duration} setYearNo={setYearNo} />
      <Year duration={duration} yearNo={yearNo} currCourse={currCourse} />
    </div>
  );
};

export default B_tech;
