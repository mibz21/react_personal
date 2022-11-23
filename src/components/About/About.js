import React from "react";
import Portrait from "../../static/images/portrait.jpeg";
import "./About.css";
export default function About() {
  return (
    <div className = "aboutContainer">
      <img className = "portrait" src={Portrait} alt = "Portrait"/>
      <div className="description">
        <h1> Hi - My name is Michael!</h1>
        <h2>I am a current Computer Engineering Student at the University of Illinois at Urbana-Champaign</h2>
      </div>

    </div>
  );
}