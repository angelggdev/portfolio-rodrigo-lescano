import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" expand={false} variant="dark">
      <Container fluid>
        <Navbar.Brand as={"div"} className="navBar--brand" onClick={() => window.scroll(0,0)}>
          RODRIGO LESCANO
        </Navbar.Brand>
        <Nav className="navBar--links">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <IoMdMenu className="menuButton" color="white" size={'40px'} onClick={() => setExpanded(!expanded)}/>
      </Container>
      <div className="navBorder"></div>
      <Nav className="mobileMenu" style={{display: expanded?'flex': 'none'}}>
        <Nav.Link href="#about-me">About Me</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
