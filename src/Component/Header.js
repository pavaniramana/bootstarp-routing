import React from 'react';
// import { Nav.Link } from 'react-router-dom';
// import { Container,Navbar,Nav } from 'react-bootstrap';

import { Nav, Container,Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Pavani</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;