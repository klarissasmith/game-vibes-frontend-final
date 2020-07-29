import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class GameCard extends React.Component{
    render() {
        return (
          <div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>The Title of the Game</Card.Title>
                  <Card.Text>
                    "This is where a small summary will be ideally with a lovely
                    short "read more..." button
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        );
    }
}

export default GameCard