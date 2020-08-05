import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class SignUp extends React.Component{
  state = {
    fields: {
      username: "", 
      password: ""
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const newUserData = this.state.fields
    // fetch goes here to post form data to the backend
    this.props.createNewUser(newUserData)
  }

  handleChange = (event) => {
    console.log(event.target.value)
    const newUser = {...this.state.fields, [event.target.name]: event.target.value}
    this.setState({ fields: newUser })
    
  }
  render() {
    console.log(this.state)
        return (
          <div>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group as={Col} controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter your username"
                  name="username"
                  value={this.state.fields.username}
                  onChange={this.handleChange}
            
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
                <Button as="input" type="submit" value="Submit"
                />
              </Form.Group>
            </Form>
          </div>
        );
    }
}

export default SignUp