import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="home">GameVibes</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav className="mr-auto">
              <Nav.Link href="games">Games</Nav.Link>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="SignUp">Sign Up</Nav.Link>
              <Nav.Link href="SignIn">Sign In</Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
