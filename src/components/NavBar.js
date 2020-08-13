import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends React.Component {
  
  changeBtn = (props) => {
    
    
  }
  
  render() {

    // const currentUser = this.props.currentUser
    // const loggedIn = !!this.props.currentUser.id
    console.log(this.props)
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="#FFFFFF" variant="light">
          <LinkContainer to="/">
            <Navbar.Brand href="/">GameVibes</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/games">
                <Nav.Link href="/games">Browse</Nav.Link>
              </LinkContainer>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Find a Game..."
                  className="mr-sm-2"
                />
                <Button className="search-button" bg="#5C4AEA" >
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link href="/login">Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
