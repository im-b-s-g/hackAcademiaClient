/* eslint-disable no-unused-vars */
import React from "react";
import "./abt.css";
import linkedInLogo from "../../assets/linkedIn-icon.png";
// import myintro from "../../assets/video.mp4";
// import VideoPlayer from "../videoPlayer/Vplayer";
const About = () => {
  return (
    <div className="About-section">
      <div className="container">
        <h1>Hack Academia</h1>
        <p>
          At <strong>Hack Academia</strong>, we are dedicated to empowering
          individuals with the knowledge to navigate academics. Our mission is
          to provide accessible, high-quality educational materials that foster
          a deeper understanding of respective courses.
        </p>
        <p>
          All course content will be made available over time. We encourage you
          to contribute, stay supportive, and keep yourself updated as we
          continue to grow.
        </p>
        <p>
          If you have any queries regarding content coontribution, please reach
          out to us via the email provided in the footer.
        </p>
      </div>

      {/* <div className="container">
        <h1>About the Author</h1>
        <p>
          <strong>Brahm Sagar Gaur</strong> is a{" "}
          <strong>Computer Science undergraduate</strong> with a passion for
          software development and artificial intelligence. He has worked on
          various projects, including <strong>HackAcademia</strong>, a resource
          hub for developers, and <strong>NeuroGenix</strong>, a deep
          learning-based personality assessment system. His interests include{" "}
          <strong>
            full-stack development, AI, and competitive programming
          </strong>
          .
        </p>
        <p>
          He enjoys solving complex problems and building practical solutions.
        </p>
      </div> */}
      <div className="container">
        <div className="author">
          <a
            href="https://www.linkedin.com/in/brahm-gaur/"
            target="_blank"
            className="linkedin-link"
          >
            <img src={linkedInLogo} alt="LinkedIn" />
          </a>
        </div>
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
