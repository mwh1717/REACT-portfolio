import React from "react";
import mugshot from './photo.jpg';
import "./photo.css";

function Photo () {
    return (
        <div className="photoback">
            <div className="photo"> <img src={mugshot} alt="mugshot" id="mugshot" />
            </div>
        </div>
    );
}

export default Photo