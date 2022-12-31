import React from "react";

import bgvideo from "../assets/video.mp4";


import "./style.css";

export function Header(props) {
  return (
    <header>
      <video autoPlay muted loop id="videobg">
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div className="heading">
        <h1 className="title">{props.title}</h1>
        <p className="sub-title">{props.subTitle}</p>
      </div>
    </header>
  );
}
