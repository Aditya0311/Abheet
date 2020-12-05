import React, { Component } from "react";
import "./MainSection.css"
import bear from "../images/bearimage.png";

function MainSection() {
    return(
        <body>
        <div className='main-container'>
            <h1>ABHEET DUTT</h1>
            <h2>Lets create unique digital experiences</h2>
            <h5>Connect With Me </h5>
            <img src={bear}/>
            <p className='headone'>About Me</p>
            <h3 className="mytext">My</h3>
            <h4>Story</h4>
        </div>
        </body>
        
        

       
    )
}

export default MainSection;
