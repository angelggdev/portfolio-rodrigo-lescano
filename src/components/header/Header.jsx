import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';

function Header() {
    return (
        <Navbar bg="dark" expand={false} variant='dark'>
            <Container fluid>
                <Navbar.Brand href="#home" className='navBar--brand'>RODRIGO LESCANO</Navbar.Brand>
                <Nav className="navBar--links">
                    <Nav.Link href="#about-me">About Me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Navbar.Toggle className='menuButton' aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Body className='offCanvasBody'>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#about-me">About Me</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            <div className='navBorder'></div>
        </Navbar>
    )
}

export default Header
