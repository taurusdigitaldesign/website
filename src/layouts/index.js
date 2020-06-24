import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import { Footer } from '../components';
import picLogo from '../.assets/images/logo.png';
import Style from './style.module.scss';

const DefaultLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand className={Style.bar} href="/">
          <img src={picLogo} height="30" className="d-inline-block align-top" alt="logo" />
          {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">Works</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {children}

      <Footer />
    </div>
  );
};

export default DefaultLayout;
