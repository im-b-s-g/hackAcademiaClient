/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./sub.css";
import { Link } from "react-router-dom";
import { data } from "./subjectNames";

const Subject = ({ yearNo, currSem, currCourse }) => {
  return (
    <div className="subject-main">
      <h2>Semester {currSem}</h2>
      <div className="subject-contents">
        {data[currCourse][currSem].map((item, index) => (
          <Link
            // to={`${yearNo}/${currSem}/${item}`}
            to={`/Units?currSem=${currSem}&currCourse=${currCourse}&subjectName=${item}`}
            key={index}
            className="subject-render"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subject;
