import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ReviewForm extends React.Component{
  
  handleSubmit = (e) => {
    e.preventDefault()
    
  }
  
  render() {
        return (
          <div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group >
                <Form.Label as="h3">Review:</Form.Label>
                <Form.Control as="textarea" rows="3" name="summary"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        );
    }
}

export default ReviewForm