import React from 'react';
import {Navbar , Nav , NavDropdown} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="primary" expand="xl" variant="dark" >
        <Navbar.Brand href="/#/">Bing-Bing-Bing Strategie</Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <Navbar.Collapse/>
          <Nav>
            <Navbar.Brand href="#/new-commande">Commande</Navbar.Brand>
          </Nav>
          <Nav className="mr-auto">
            <NavDropdown title="Accès au postes" id="collasible-nav-dropdown">
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{
                  window.location="/#/poste/1"
                }}>
                  Poste 1
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{
                  window.location="/#/poste/2"
                }}>
                  Poste 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/poste/3">
                  Poste 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/poste/4">
                  Poste 4
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar.Toggle>
    </Navbar>
  )
}
