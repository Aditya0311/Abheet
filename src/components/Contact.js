import React, { Component } from "react";
import "./MainSection.css";
import hand from "../images/hand.png";
import email from "../images/email.png";
import call from "../images/call.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import dribble from "../images/dribble.png";

function Contact() {
    return (
        <div className="main-container" >
            <div>
                    <p className='headthree' id="contact">CONTACT</p>
                    <h3 className='connecttext1'>Connect</h3>
                    <h4 className='connecttext2'>with me</h4>
                </div>
                <div>
                    <img className="handicon" src={hand} />
                    <p className="contactmsg">Hello, I’ve been waiting for you. Fill up the form or contact me at:</p>
                    <img className="emailicon" src={email} />
                    <p className="email">design@abheetdutt.com</p>
                    <img className="callicon" src={call} />
                    <p className="phone">+91 8920144549</p>
                    <a href="https://www.linkedin.com/in/abheet-dutt-6a1483134/" target="_blank">
                        <img className="linkedinicon" src={linkedin} />
                    </a>
                    <a href="https://wa.me/918920144549?text=Hi%20Abheet!%20Let%27s%20create%20something%20big%20together." target="_blank">
                        <img className="whatsappicon" src={whatsapp} />
                    </a>
                    <a href="https://dribbble.com/Abheet" target="_blank">
                        <img className="dribbleicon" src={dribble} />
                    </a>
                </div>
        </div>
    )
}

export default Contact;