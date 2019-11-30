import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class Layout extends React.Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Obazs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="site-nav">
                        <Nav.Link href="#about">History</Nav.Link>
                        <Nav.Link href="#contact">Appointments</Nav.Link>
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#portfolio/portraits">Portraits</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#portfolio/wedding">Wedding</NavDropdown.Item> */}
                            <NavDropdown.Item href="#portfolio/landscape">Landscape</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#portfolio/favorites">Favorites</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

            
        );
    }
}