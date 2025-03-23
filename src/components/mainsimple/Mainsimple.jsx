/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import B_tech from "../Course/B.Tech/B_tech";
import Home from "../homePage/Home";
import Login from "../login/Login";
import Upload from "../upload/UploadForm";
import "./mains.css";
import Units from "../units/Units";
import File from "../Files/File";

const Mainsimple = () => {
  return (
    <div className="mainArea">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/B_tech/*"
          element={<B_tech duration={4} currCourse={"BTech"} />}
        />
        <Route
          path="/BCA/*"
          element={<B_tech duration={3} currCourse={"BCA"} />}
        />
        <Route
          path="/LAW/*"
          element={<B_tech duration={4} currCourse={"LAW"} />}
        />
        <Route path="/Login/*" element={<Login />} />
        <Route path="/Upload/*" element={<Upload />} />
        <Route path="/Units/*" element={<Units />} />
        <Route path="/File/*" element={<File />} />
      </Routes>
    </div>
  );
};

export default Mainsimple;
