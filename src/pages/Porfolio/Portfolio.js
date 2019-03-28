import React, { Component } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import "./portfolio.css";
import hikable from "./hikable.PNG";
import travld from "./travld.PNG";

class Portfolio extends Component {

    render() {
        return (
            <Container id="porfolioCont">
                <Row>
                    <Card id="hikeableCard">
                        <Card.Img variant="top" src = { hikable } />
                        <Card.Body>
                            <Card.Title>Hikable</Card.Title>
                            <Card.Text>
                                    <li id="cardItem">Incorporated Google Places API into application, which led to the ability for user to input geographic location and get JSON responses converted to location coordinates.</li>
                                    <li id="cardItem">Stored coordinates as variables and utilized them in REI API call based on selected activity.</li>
                                    <li id="cardItem">Manipulated JSON response from REI coupled with jQuery to display activity options to user. </li>
                                    <li id="cardItem">Developed application logic, simulating an agile work space by delivering expected functionality within a given time frame. </li>
                                    <li id="cardItem">Demonstrated leadership skills by providing direction and mentoring to teammates having difficulties with concepts. </li>
                            </Card.Text>
                            <Button id="enterSiteMove" href="https://mwh1717.github.io/outdoor-application/" target="_blank">VIEW SITE</Button>
                        </Card.Body>
                    </Card>
                    <Card id="travCard">
                        <Card.Img variant="top" src = { travld } />
                        <Card.Body>
                            <Card.Title>Travel'd</Card.Title>
                            <Card.Text>
                                    <li id="cardItem">Took advantage of distributed databases like MongoDB in order to store user and trip data, where it could then be retrieved through Express Routes. </li>
                                    <li id="cardItem">Utilized multiple NPM packages including Passport for user authentication.</li>
                                    <li id="cardItem">Incorporated React components, which gave way to a more streamlined design process when using the “card” component to display trip details.</li>
                                    <li id="cardItem">Determined that Virtual DOM functionality of React allowed for superior responsiveness across the application. </li>
                                    <li id="cardItem">Led front end development tasks by conceptualizing and designing the application’s look and feel.</li>
                                    <li id="cardItem">Maintained site accessibility by creating components, like the navigation bar, which allows user to move fluidly within the application.</li>
                                    <li id="cardItem">Disseminated learned concepts in React and CSS to teammates. </li>
                            </Card.Text>
                            <Button id="enterSite" href="https://trvld.herokuapp.com/" target="_blank">VIEW SITE</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default Portfolio;