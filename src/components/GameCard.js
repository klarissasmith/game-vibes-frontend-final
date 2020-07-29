import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class GameCard extends React.Component{
    render() {
        const {image, title, story} = this.props.game
        return (
          <div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {story}
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