import React from 'react'

import { Nav, NavItem, Navbar } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return(
    <Navbar inverse collapseOnSelect className="nav-selector">
      <Navbar.Header>
        <Navbar.Brand eventKey={1} className="nav-title">YELPER barcelona</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={2}>About</NavItem>
            <NavItem eventKey={3}>Contact</NavItem>
            <NavItem eventKey={4}>Thanks to</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={5}>Skylab - © 2017</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer
