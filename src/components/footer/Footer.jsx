/* eslint-disable no-unused-vars */
import React from "react";
import "./foot.css";
import Logo from "../../assets/removed Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-left">
        <div className="f-contribute">
          <h3>Want to Contribute ?</h3>
          <ul>
            <li>Scan the file using any decent scanner </li>
            <li>save the file as .pdf</li>
            <li>E-mail us the document at HackAcademia@gmail.com</li>
            <li>
              E-mail should contain all the relevant informaion about the
              document.
            </li>
            <li>
              Relevant info: subject name, Course code, semester, year and your
              name
            </li>
          </ul>
        </div>
        <div className="f-contact">
          <h3>Contact Us</h3>
          <p>HackAcademia@gmail.com</p>
        </div>
      </div>
      <div className="f-right">{/* <img src={Logo} alt="Logo.png" /> */}</div>
    </div>
  );
};

export default Footer;
