import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup"

class ReviewCard extends React.Component{
  handleClick = () => {
    this.props.deleteReview(this.props.review.id)
  }
  render() {
    const { summary } = this.props.review
        return (
          <div>
            <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                {summary}
              </Card.Body>
              <button className="secondary-button" onClick={this.handleClick}> Delete </button>
              <button className="secondary-button" > Edit </button>
            </Card>
            </CardDeck>
          </div>
        );
    }
}

export default ReviewCard