import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup"

class ReviewCard extends React.Component{
  render() {
    const { summary } = this.props.review
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Header>A Review:</Card.Header>
              <Card.Body>
                {summary}
              </Card.Body>
            </Card>
          </div>
        );
    }
}

export default ReviewCard