import React, { Component } from "react";
import "./MainSection.css";
import { Button, Link } from "react-scroll";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Contact from "./Contact";
import Navbar from "./Navbar";


function MainSection() {
    return(
        <body>
            {/* <div className="navbar">
                <h2 className="logo">Abheet.</h2>
                <Navbar />
                 <Link
                    className="nav-item2"
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                > Work</Link>
                 <Link
                    className="nav-item3"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                > Contact</Link>
            </div> */}
            <Navbar />
            <AboutMe />
            <Work />
            <Contact />
            <div className='main-container'>
                <div>
                     <a className="buttontext2" href="#" target="_blank" >Submit</a>
                </div>
                {/* <div>
                     <a className="hvr-grow-shadow" href="#" target="_blank" >Submit</a>
                </div> */}
                <h2 className="namehead">Abheet.</h2>
                <p className="copyright">Copyright 2020. All Rights Reserved.</p>
                <div className="endspace"></div>

            </div>
        </body>
        
    )
}

export default MainSection;
