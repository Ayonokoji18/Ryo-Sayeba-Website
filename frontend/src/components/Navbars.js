import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Navbars() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="/images/logo1.png" alt="logo" className="logo-img" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
