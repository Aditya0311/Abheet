import React, { Component } from "react";
import "./MainSection.css";
import bear from "../images/bearimage.png";
import vector from "../images/vector.png";
import arrow from "../images/arrow.png";
import { Button, Link } from "react-scroll";

function AboutMe() {
    return (
        <div className='main-container'>
            <h1>ABHEET DUTT</h1>
            <h2 className="head1">Let's create unique digital experiences</h2>
            <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                > <h5 className="connecthead">Connect With Me </h5></Link>
            
            <img className="arrow" src={arrow} />
            <img className='bearimage' src={bear}/>
            <div >
                <p id="about" className='headone'>About Me</p>
                <h3 className="mytext">My</h3>
                <h4 className='storytext'>Story</h4>
            </div>
            <p className='abouttext'>
            I am a Digital Product Designer on a mission to solve complex business problems with beautiful and innovative designs. By combining design and marketing psychology with your brand’s personality, I focus on giving your customers the best user experience they’ve ever witnessed.
            </p>
            <img className='vectorimg' src={vector} />
        </div>
    )

}

export default AboutMe;