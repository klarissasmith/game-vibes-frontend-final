import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ReviewForm extends React.Component{
  handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }
  
  render() {
        return (
          <div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group >
                <Form.Label as="h3">Review:</Form.Label>
                <Form.Control as="textarea" rows="3" name="summary" placeholder="Enter your review here" onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                Submit
              </Button>
              <Button variant="danger" type="delete">
                Delete
              </Button>
            </Form>
          </div>
        );
    }
}

export default ReviewForm