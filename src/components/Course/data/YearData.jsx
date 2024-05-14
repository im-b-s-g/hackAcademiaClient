/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./year.css";
import React from "react";
import File from "../../Files/File";
import Subject from "../../subjects/Subject";

const YearData = ({ yearNo, currCourse }) => {
  console.log("in Year: " + currCourse);
  let one = yearNo * 2 - 1;
  let two = yearNo * 2;
  return (
    <div className="year-main">
      {/* <File currSem={one} currCourse={currCourse} />
      <File currSem={two} currCourse={currCourse} /> */}
      <Subject yearNo={one} currSem={one} currCourse={currCourse} />
      <Subject yearNo={two} currSem={two} currCourse={currCourse} />
    </div>
  );
};

export default YearData;
