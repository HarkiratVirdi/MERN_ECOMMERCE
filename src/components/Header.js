import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="fas fa-shopping-cart" href="#/cart">
                Cart
              </Nav.Link>
              <Nav.Link href="#login" className="fas fa-user">
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
