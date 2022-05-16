import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './icons8-brain-64.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className=" Tilt br2 shadow-2 w3">
                <div style={{height: '60px'}} className="pa2">
                    <img style={{paddingTop:'5px', height:'40px'}} src={brain} alt="logo"></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;