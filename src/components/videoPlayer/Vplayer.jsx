/* eslint-disable no-unused-vars */
import React from "react";
import ReactPlayer from "react-player";
import "./player.css";
import intro from "../../assets/video.mp4";
const VideoPlayer = () => {
  return (
    <div className="vid-abt">
      <ReactPlayer url={intro} controls={true} height="300px" />
    </div>
  );
};

export default VideoPlayer;
