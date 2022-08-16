import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Free Tools</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Tools</Nav.Link>
                        <Nav.Link href="#features">TODO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
export default Menu;