/* eslint-disable no-unused-vars */
import React from "react";
import "./abt.css";
import VideoPlayer from "../videoPlayer/Vplayer";
const About = () => {
  return (
    <div className="About-section">
      <div className="about-text">
        <h1>Hack Academia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          assumenda odio explicabo rem eum neque vitae dicta cupiditate ipsa,
          distinctio dolor deserunt culpa at voluptatum voluptates. Dolore
          ducimus mollitia quae pariatur, facilis eos earum repudiandae officia
          perferendis sapiente adipisci sed quo quasi dolor quia inventore,
          veritatis cum! Alias, veritatis veniam. Ipsam quae obcaecati
          aspernatur ut perferendis nesciunt dolores similique quam. Repudiandae
          rerum porro ab alias quia facere! Delectus reiciendis, architecto
          autem modi quaerat quam, dolore asperiores ea ipsum eius sapiente!
          Quaerat nobis ipsum, libero eius repellat voluptates beatae distinctio
          maiores dignissimos aspernatur! Incidunt consequatur natus aliquam
          quidem provident amet odio!
        </p>
      </div>
      <div className="About-video">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default About;
