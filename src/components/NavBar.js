import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap'

import { BrowserRouter as Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand href="/">GameVibes</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/games">
                <Nav.Link href="/games">Games</Nav.Link>
              </LinkContainer>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              {/* <Link to="/reviewform"> 
                <Nav.Link href="/reviewform">Leave a Review!</Nav.Link>
              </Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Link to="/signup">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </Link>
              <Link to="/signin">
                <Nav.Link eventKey={2} href="signin">
                  Sign In
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
