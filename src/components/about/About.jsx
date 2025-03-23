/* eslint-disable no-unused-vars */
import React from "react";
import "./abt.css";
import myintro from "../../assets/video.mp4";
import VideoPlayer from "../videoPlayer/Vplayer";
const About = () => {
  return (
    <div className="About-section">
      <div className="about-text">
        <h1>Hack Academia</h1>
        <p>
          At Hack Academia, we are dedicated to empowering individuals with the
          knowledge to navigate and secure the digital world. Our mission is to
          provide accessible, high-quality educational materials that foster a
          deeper understanding of cybersecurity.
        </p>
      </div>
      {/* <div className="About-video"> */}
      {/* <VideoPlayer /> */}
      {/* <video */}
      {/* src={myintro} */}
      {/* autoPlay */}
      {/* controls */}
      {/* loop */}
      {/* preload="auto|metadata|none" */}
      {/* muted */}
      {/* type="video/mp4" */}
      {/* ></video> */}
      {/* </div> */}
    </div>
  );
};

export default About;
