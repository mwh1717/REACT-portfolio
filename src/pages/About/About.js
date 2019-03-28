import React, { Component } from 'react';
import Photo from "../../components/Photo/Photo";
import Info from "../../components/Info/Info";
import "./about.css";
import { Container, Row, Col } from 'react-bootstrap';

class About extends Component {

    constructor(props) {
        super(props)
        this.state = { show : true };
        this.redact = this.redact.bind(this)
    }

    redact = () => {
        const { show } = this.state;
        this.setState( { show : !show } );
    }

    render() {
        return (
            <Container>
                <button id="redactBut" onClick={()=>this.redact()}><div id="here">click here to</div>REDACT</button>
                <Row id="row1">
                    <Col lg="6" md="6" sm="12" id="polaroid">
                        <Photo />
                    </Col>
                    <Col lg="6" md="6" sm="12" id="info">
                        <Info show={ this.state.show }/>
                    </Col>
                </Row>
                <Row id="row2">
                    <Col id="remarks">
                        <span id="remark">REMARKS:</span>
                        <br></br>
                        Howell, Michael <div className={this.state.show ? "blackBox" : "noBox"}><span className={this.state.show ? "hide" : ""}>(aka "The New Guy")</span></div> began his career in 2010 with the <div className={this.state.show ? "blackBox" : "noBox"}><span className={this.state.show ? "hide" : ""}>Federal Bureau of Investigation</span></div>. After two years of work at the federal level, he transitioned to street level policing with the Charlotte Mecklenburg Police Department. While working full-time, he pursued and completed his <div className={this.state.show ? "blackBox" : "noBox"}><span className={this.state.show ? "hide" : ""}>Master of Science in Cybersecurity with the University of Maryland, University College</span></div>. Upon completion, Howell did not feel that cyber security was the right fit and that something was “missing”. <div className={this.state.show ? "blackBox" : "noBox"}><span className={this.state.show ? "hide" : ""}>Howell quit his job to continue his interest in technology, full-time, in the full stack web development boot camp at the University of North Carolina at Charlotte</span></div>. It was in the boot camp that Howell realized his passion for UI Development. Intel suggests that at this moment, <div className={this.state.show ? "blackBox" : "noBox"}><span className={this.state.show ? "hide" : ""}>Howell is actively searching for UI Developer roles to continue his passion in the Charlotte, NC area</span></div>.
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;