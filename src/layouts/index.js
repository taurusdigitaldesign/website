import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import picLogo from '../.assets/images/logo.jpg';

const DefaultLayout = ({children}) => (
  <div>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img src={picLogo} height="30" className="d-inline-block align-top" alt="logo" />
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#home">Works</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {children}
  </div>
);

export default DefaultLayout;
