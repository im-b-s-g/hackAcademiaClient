/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Port } from "./../server/Port";
import { useLocation } from "react-router-dom";
import "./file.css";

const File = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currSem = queryParams.get("currSem");
  const currCourse = queryParams.get("currCourse");
  const subjectName = queryParams.get("subjectName");
  const unit = queryParams.get("unit");

  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Port}/pdfs?currSem=${currSem}&currCourse=${currCourse}&subjectName=${subjectName}&unit=${unit}`
        );
        setPdfs(response.data);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currCourse, currSem, subjectName, unit]);

  const handleViewPdf = async (filename) => {
    try {
      window.open(`${Port}/view-pdf/${filename}`, "_blank");
    } catch (error) {
      console.error("Error viewing PDF:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loader">
          Loading files...
          <div className="spinner"></div>
        </div>
      ) : (
        <ul>
          {pdfs.map((pdf, index) => (
            <div key={index} className="list-render">
              <li>{pdf.filename}</li>
              <button
                className="btn"
                onClick={() => handleViewPdf(pdf.filename)}
              >
                View PDF
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default File;
