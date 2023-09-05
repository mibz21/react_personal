import React from "react";
import Portrait from "../../static/images/portrait.jpeg";
import "../everything.css";
import "./About.css";
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
      <div className = "description_what">
        <h1>About Me</h1>
        <br/>
        <h2>Welcome to my website! This website is an ongoing personal project that details my experience and computer engineering activities. It was originally deployed using Github Pages, but transitioned to an AWS based service, hosted through S3 services and routed using Route53 and Cloudformation to use a custom domain.
        </h2>
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
      </div>
    </div>

  </div>
  );
}