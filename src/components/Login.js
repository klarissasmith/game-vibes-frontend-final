import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Login extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault()
    
  } 

  render() {
        return (
          <div >
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Button as="input" type="submit" value="Submit" onClick={() => this.showAlert} />
              </Form.Group>
            </Form>
          </div>
        );
    }
}
export default Login