import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./contact.css";

class Contact extends Component {

    componentWillMount(){
        setTimeout(() => { 
            this.props.history.push('/');
    }, 5000)
    }

    render() {
        
        return(
            <Container id="notreadycont">
                <Row id="notready">
                    <Col>YOU ARE NOT CLEARED FOR THIS AREA YET! You will be escorted back in 5...4...3...</Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;