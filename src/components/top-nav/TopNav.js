import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";

const MENU1 = [["/", "Home"], ["/food", "Food"]];

export default function TopNav() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {MENU1.map((v, i) => (
            <Link to={v[0]} className="nav-link" key={i}>
              {v[1]}
            </Link>
          ))}

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <Link to="/" className="dropdown-item">
              Home
            </Link>
            <NavDropdown.Divider />
            <Link to="/food" className="dropdown-item">
              Foods
            </Link>
          </NavDropdown>

          <Nav.Link onClick={() => auth.signOut()}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
