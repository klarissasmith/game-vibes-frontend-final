import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class SignUp extends React.Component{
    render() {
        return (
          <div>
            <Form>
              <Form.Group as={Col} controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Button as="input" type="submit" value="Submit" />
              </Form.Group>
            </Form>
          </div>
        );
    }
}

export default SignUp