/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Head from "./components/Header/Header";
import Nav from "./components/navBar/Navbar";
import Mainsimple from "./components/mainsimple/Mainsimple";
import "./App.css";
import Upload from "./components/upload/UploadForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Components">
      <Head />
      <Nav />
      <Mainsimple />
      <Footer />
    </div>
  );
}

export default App;
