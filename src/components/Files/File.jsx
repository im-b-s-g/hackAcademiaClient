/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Port } from "./../server/Port";
import { useLocation } from "react-router-dom";
import "./file.css";

const File = () => {
  const location = useLocation();
  console.log(location);
  // Access query parameters from the location object
  const queryParams = new URLSearchParams(location.search);
  const currSem = queryParams.get("currSem");
  const currCourse = queryParams.get("currCourse");
  const subjectName = queryParams.get("subjectName");
  const unit = queryParams.get("unit");

  const [pdfs, setPdfs] = useState([]);
  // subjectName, CourseCode, UnitNumber
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://${Port}/pdfs?currSem=${currSem}&currCourse=${currCourse}&subjectName=${subjectName}&unit=${unit}`
        );
        console.log(
          `http://${Port}/pdfs?currSem=${currSem}&currCourse=${currCourse}&subjectName=${subjectName}&unit=${unit}`
        );
        setPdfs(response.data);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };

    fetchData();
  }, [currCourse, currSem, subjectName, unit]);

  const handleViewPdf = async (filename) => {
    try {
      window.open(`http://${Port}/view-pdf/${filename}`, "_blank");
    } catch (error) {
      console.error("Error viewing PDF:", error);
    }
  };

  return (
    <div>
      <ul>
        {pdfs.map((pdf, index) => (
          <div key={index} className="list-render">
            <li>{pdf.filename}</li>
            <button className="btn" onClick={() => handleViewPdf(pdf.filename)}>
              View PDF
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default File;
