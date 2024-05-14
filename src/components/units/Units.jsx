/* eslint-disable no-unused-vars */
import React from "react";
import myVideo from "../../assets/video.mp4";
import { Link, useLocation } from "react-router-dom";
import "./un.css";

const Units = () => {
  const location = useLocation();
  // Access query parameters from the location object
  const queryParams = new URLSearchParams(location.search);
  const currSem = queryParams.get("currSem");
  const currCourse = queryParams.get("currCourse");
  const subjectName = queryParams.get("subjectName");
  console.log(
    "Units: " +
      `/File?currSem=${currSem}&currCourse=${currCourse}&subjectName=${subjectName}`
  );
  return (
    <div className="unit-main">
      <div className="unit-contents">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Link
            to={`/File?currSem=${currSem}&currCourse=${currCourse}&subjectName=${subjectName}&unit=${item}`}
            key={index}
            className="unit-render"
          >
            Unit{` ${item}`}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Units;
