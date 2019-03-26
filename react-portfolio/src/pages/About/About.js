import React, { Component } from 'react';
import Photo from "../../components/Photo/Photo";
import Info from "../../components/Info/Info";
import "./about.css";
import { Container, Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row id="row1">
                    <Col id="polaroid">
                        <Photo />
                    </Col>
                    <Col>
                        <Info />
                    </Col>
                </Row>
                <Row id="row2">
                    <Col id="remarks">
                        <span id="remark">REMARKS:</span>
                        <br></br>
                        Howell, Michael began his career in 2010 with the Federal Bureau of Investigation. After two years of work at the federal level, he transitioned to street level policing with the Charlotte Mecklenburg Police Department. While working full-time, he pursued and completed his Master of Science in Cybersecurity with the University of Maryland, University College. Upon completion, Howell did not feel that cyber security was the right fit and that something was “missing”. Howell quit his job to continue his interest in technology, full-time, in the full stack web development boot camp at the University of North Carolina at Charlotte. It was in the boot camp that Howell realized his passion for UI Development. Intel suggests that at this moment, Howell is actively searching for UI Developer roles to continue his passion in the Charlotte, NC area.
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;