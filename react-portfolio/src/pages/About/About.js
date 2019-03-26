import React, { Component } from 'react';
import Photo from "../../components/Photo/Photo";
import "./about.css";
import { Container, Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row id="row1">
                    <Col lg="6" id="polaroid">
                        <Photo />
                    </Col>
                    <Col lg="6">
                        Name: Howell, Michael
                <br></br>
                        Alias: "The New Guy"
                <br></br>
                        Status: Searching for job
                </Col>
                </Row>
                <Row id="row2">
                    <Col lg="2"></Col>
                    <Col>
                        REMARKS:
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Container>
        );
    }
}

export default About;