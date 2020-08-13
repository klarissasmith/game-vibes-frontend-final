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
    const currentUser = { ...this.state.formFields, [event.target.name]: event.target.value }
    this.setState({formFields: currentUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //THE FETCH FOR LOGIN TO SEND THE DATA FROM HERE TO APP
    this.props.loginFetch(this.state.formFields).then(resp => { this.props.onLogin(resp) })
    this.props.history.push("/games")
  } 

  render() {
    // console.log(this.props)
        return (
          <div>
            <Form inline onSubmit={this.handleSubmit}>
              <Form.Group as={Col} controlId="formGroupUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter your username"
                  name="username"
                  value={this.state.formFields.username}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.formFields.password}
                  onChange={this.handleChange}
                />
                <Button
                  className="primary-button"
                  as="input"
                  type="submit"
                  value="Submit"
                  onClick={() => this.showAlert}
                />
              </Form.Group>
            </Form>
          </div>
        );
    }
}
export default Login