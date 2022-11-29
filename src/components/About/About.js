import React from "react";
import Portrait from "../../static/images/portrait.jpeg";
import "../everything.css";
export default function About() {
  return (
    <div className= "homeContainer">
      <div className = "aboutContainerTop">
        <img className = "portrait" src={Portrait} alt = "Portrait"/>
        <div className="description">
          <h1>Hi! I'm Michael</h1>
          <h2>Currently Studying Computer Engineering at the University of Illinois at Urbana-Champaign</h2>
        </div>
      </div>
    <div className = "Container">
      <div className = "description">
        <h1>About Me</h1>
        <br/>
        <h3>Welcome to my website! This website is an ongoing personal project that is written in React and deployed on Github Pages.
        </h3>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>

  </div>
  );
}