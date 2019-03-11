import React, { Component } from 'react';
import Photo from "../../components/Photo/Photo";
import "./about.css";

class About extends Component {
    render() {
        return (
            <div>
                <div className="row" id="row1">
                    <div className="col lg-3">
                    Name: Howell, Michael
                    <br></br>
                    Alias: 
                    <br></br>
                    Status: Searching for job
                    </div>
                    <div className="col lg-3">
                    <Photo />
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        );
    }
}

export default About;