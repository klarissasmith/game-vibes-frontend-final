import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GameCard extends React.Component{
  render() {
        const {id, image, title, story} = this.props.game
        return (
          <div>
              <Card as="card" row="3">
              <Link to={`/games/${id}`}>
                <Card.Img src={image} alt="game cover image" />
              </Link>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{story}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
          </div>
        );
    }
}

export default GameCard