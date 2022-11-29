import React from "react";
import Portrait from "../../static/images/portrait.jpeg";
import "./About.css";
export default function About() {
  return (
    <div className= "homeContainer">
      <div className = "aboutContainerTop">
        <img className = "portrait" src={Portrait} alt = "Portrait"/>
        <div className="description">
          <h1>Hi - My name is Michael!</h1>
          <h2>Currently Pursuing Computer Engineering at the University of Illinois at Urbana-Champaign</h2>
        </div>
      </div>
    <div className = "aboutContainer">
      <div className = "description">
        <h1>About Me</h1>
        <h3>Welcome to my website! This website is a personal project and will be my main website for future endeavors and updates.
        </h3>
      </div>
    </div>

  </div>
  );
}