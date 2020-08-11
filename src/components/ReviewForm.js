import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ReviewForm extends React.Component {
  state = {
    fields: {
      summary: "",
      user_id: 3,
      game_id: this.props.game_id,
    },
  };

  handleChange = (event) => {
    const newReview = {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    };
    console.log({ fields: newReview })
    this.setState({ fields: newReview });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newReviewData = this.state.fields;
    // fetch goes here to post form data to the backend
    this.props.createNewReview(newReviewData);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label as="h3">Review:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="summary"
              placeholder="Enter your review here"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReviewForm;
