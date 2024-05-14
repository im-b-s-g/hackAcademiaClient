/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Port } from "../server/Port";
import { data } from "./../subjects/subjectNames";
import "./Upload.css";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event);
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const successText = document.getElementById("successText");
    const Token = localStorage.getItem("Login Token");

    if (!Token) {
      navigate("/Login");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("title", event.target.title.value);
      formData.append("semester", event.target.semester.value);
      formData.append("course", event.target.course.value);
      formData.append("unit", event.target.unit.value);
      console.log(event.target.unit.value);

      const payload = {};
      for (const [key, value] of formData.entries()) {
        payload[key] = value;
      }

      console.log("PAYLOAD: " + formData);

      const response = await axios.post(`${Port}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      successText.innerText = `${subject}.pdf Uploaded Successfully`;
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      successText.innerText = `Error Uploading ${subject}.pdf`;
      console.error("Error uploading file:", error);
    }
  };

  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("${Port}/pdfs");
        setPdfs(response.data);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };
    fetchData();
  }, []);

  const handleDownloadPdf = async (filename) => {
    try {
      const response = await axios.get(`${Port}/download-pdf/${filename}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);

      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const handleViewPdf = async (filename) => {
    try {
      window.open(`${Port}/view-pdf/${filename}`, "_blank");
    } catch (error) {
      console.error("Error viewing PDF:", error);
    }
  };

  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState();
  const [subject, setSubject] = useState();

  const handleSubject = (event) => {
    console.log("clicked!: " + event.target.value);
    setSubject(event.target.value);
  };

  const handleCourseSemesterChange = (event) => {
    const { name, value } = event.target;

    console.log(name + " " + value);
    if (name === "course") {
      setCourse(value);
    } else if (name === "semester") {
      setSemester(value);
    }
  };

  return (
    <div>
      <div className="f-main">
        <h2>Enter File Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="f-content">
            <label htmlFor="course">Course</label>
            <br />
            <select
              name="course"
              id="course"
              onChange={handleCourseSemesterChange}
              required
            >
              <option></option>
              <option value="BTech">BTech</option>
              <option value="BCA">BCA</option>
              <option value="LAW">LAW</option>
            </select>
          </div>

          <div className="f-content">
            <label htmlFor="sem">Semester</label>
            <br />
            <input
              type="number"
              max={8}
              id="sem"
              name="semester"
              onChange={handleCourseSemesterChange}
              required
            />
          </div>
          <div className="f-content">
            <br />
            <label htmlFor="title">Subject Name</label> <br />
            {/* <input type="text" id="title" name="title" required /> */}
            <select onChange={handleSubject} name="title" id="title" required>
              {semester &&
                course &&
                data[course][semester].map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
            </select>
          </div>

          <div className="f-content">
            <label htmlFor="unit">Unit No.</label>
            <br />
            <select name="unit" id="unit" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="f-content">
            <label htmlFor="files">Upload Files</label>
            <br />
            <input
              type="file"
              id="files"
              name="files"
              multiple={false}
              onChange={handleChange}
              required
              accept=".pdf"
            />
          </div>
          <button type="submit">Upload</button>
          <p id="successText"></p>
        </form>
      </div>

      {/* <div className="pdfsFile">
        <ul>
          {pdfs.map((pdf) => (
            <div key={pdf.filename} className="list-render">
              <li>{pdf.title}</li>
              <button
                className="btn"
                onClick={() => handleViewPdf(pdf.filename)}
              >
                View PDF
              </button>
            </div>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
export default App;
