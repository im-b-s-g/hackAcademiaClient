/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tabs.css";

const Tab = ({ duration, setYearNo }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const mapping = (key) => {
    return (
      <li
        key={key}
        onClick={() => {
          setYearNo(key);
          setSelectedTab(key);
        }}
      >
        <Link
          to={`${key}`}
          className={selectedTab === key ? "tab-active" : "tab-unactive"}
        >
          {`Year ${key}`}
        </Link>
      </li>
    );
  };
  const render = () => {
    const arr = [];
    for (let i = 1; i <= duration; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="tabs">
      <ul>{render().map((key) => mapping(key))}</ul>
    </div>
  );
};

export default Tab;
