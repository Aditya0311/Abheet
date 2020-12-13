import React, { Component } from "react";
import "./MainSection.css";
import rectangle from "../images/rectangle.png";
import iyaad from "../images/iyaad.png";
import christopher from "../images/christopher.png";
import icon from "../images/lctnicon.png";


function Work() {
    return (
        <div className="main-container">
            <div>
                    <p id="work" className='headtwo'>TESTIMONIALS</p>
                    <h3 className='sattext'>Satisfied</h3>
                    <h4 className='clienttext'>Clients</h4>
                </div>
                <div>
                    <img className="boxone" src={rectangle} />
                    <img className="picone" src={iyaad} />
                    <p className="name1">Iyaad</p>
                    <p className="compname1">Penny</p>
                    <img className="icon1" src={icon} />
                    <p className="loc1">Riyadh,Saudi Arabia</p>
                    <p className="review1">Working with Abheet was an amazing experience. Definitely recommended, for sure we will come back to you for our next big project!! Thanks a ton.</p>
                    <a className="worklink1" href="https://penny.co/" target="_blank">visit website</a>
                </div>
                <div>
                    <img className="boxtwo" src={rectangle} />
                    <img className="pictwo" src={christopher} />
                    <p className="name2">Christopher</p>
                    <p className="compname2">Botmind</p>
                    <img className="icon2" src={icon} />
                    <p className="loc2">Paris,France</p>
                    <p className="review2">Working with Abheet was an amazing experience. Definitely recommended, for sure we will come back to you for our next big project!! Thanks a ton.</p>
                    <a className="worklink2" href="https://www.botmind.io/en/" target="_blank">visit website</a>
                </div>
                <h2 className="head3">Anndd alot more...</h2>
                <div>
                    <a className="buttontext1" href="https://dribbble.com/Abheet" target="_blank" >View All Work</a>
                </div>
        </div>
    )
}

export default Work;