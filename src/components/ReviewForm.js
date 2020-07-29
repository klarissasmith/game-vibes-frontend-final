import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ReviewForm extends React.Component{
    render() {
        return (
          <div>
            <Form>
              <Form.Group >
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows="3" />
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