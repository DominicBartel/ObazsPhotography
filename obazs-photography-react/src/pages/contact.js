import React from 'react';
import PhotoWall from "../components/gallery";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'



class Contact extends React.Component {

    render() {

        // this.routeLocation = this.props.location.pathname;
        // console.log(this.routeLocation)

        return (

            <div className="Contact" >
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Contact
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Title>Steven Szabo</Card.Title>
                                <ListGroup.Item>Phone: (216) 288-7903</ListGroup.Item>
                                <ListGroup.Item>Email: <a href="mailto:steven.szabo54@gmail.com">Steven.Szabo54@gmail.com</a></ListGroup.Item>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Social Media
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><a href="https://www.facebook.com/OBAZS-Photography-2221555021274390/">Facebook</a></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }

}

export default Contact;

