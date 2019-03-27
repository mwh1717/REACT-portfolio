import React from "react";
import "./info.css";
import html from "./html.png";
import css from "./css.png";
import js from "./js.jpg";
import react from "./react.jpg";

function Info (props) {
    return (
        <div className="info">
            <div className="row" id="data">Legal Name: Howell, Michael</div>
            <div className="row" id="data">Known Alias: "<div className={`${props.show  ? "blackBox" : "noBox"}`}><span className={`${props.show  ? "hide" : ""}`}>The New Guy</span></div>"</div>
            <div className="row" id="data">Status: Searching for job</div>
            <div className="row" id="data">Proficiencies:</div>
            <div className="row" id="pics">
                <div col lg-3 ><img src={html} alt="html logo" id="html" /></div>
                <div col lg-3 ><img src={css} alt="css logo" id="css" /></div>
                <div col lg-3 ><img src={js} alt="js logo" id="js" /></div>
                <div col lg-3 ><img src={react} alt="react logo" id="react" /></div>
            </div>

        </div>

    )
}

export default Info
