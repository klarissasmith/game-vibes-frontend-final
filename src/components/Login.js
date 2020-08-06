import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Login extends React.Component{
  state = {
    formFields: {
      username: "",
      password: ""
    }
  }
  
  handleChange = (event) => {
    console.log(event.target.value)
    const currentUser = { ...this.state.formFields, [event.target.name]: event.target.value }
    this.setState({formFields: currentUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const currentUserData = this.state.formFields
    //fetch goes here for Login stuff???
    this.props.loginFetch(currentUserData)
  } 

  render() {
    console.log(this.state.formFields)
        return (
          <div >
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter your username"
                  name="username"
                  value={this.state.formFields.username}
                  onChange={this.handleChange}
                  
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.formFields.password}
                  onChange={this.handleChange}
                />
                <Button as="input" type="submit" value="Submit" onClick={() => this.showAlert} />
              </Form.Group>
            </Form>
          </div>
        );
    }
}
export default Login