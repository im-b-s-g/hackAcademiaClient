/* eslint-disable no-unused-vars */
import React from "react";
import "./newsbox.css";

const News = () => {
  return (
    <div className="news-box">
      <div className="head-news">What&apos;s New?</div>
      <div className="new-1" />
      <div className="new-info">
        <ul>
          <li>
            Only B.tech final semester Notes until Mid-Semester are available
          </li>
          {/* <li>New Course Added</li>
          <li>PYQ&apos;s added for B.tech CSE 1 sem</li> */}
        </ul>
      </div>
    </div>
  );
};

export default News;
