import * as React from "react";
import { useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
// import { Link } from "react-router-dom";
import "./NavBar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faInstagram,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";

import "./NavBar.css";

export default function Navbar(){
    const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        
        <header>
            <FaBars className = "nav-btn-fake"/>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Experience</a>
                <a href="/#">Contact Me</a>
                <button className = "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className = "nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
  );
};