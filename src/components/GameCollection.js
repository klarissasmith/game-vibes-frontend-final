import React from 'react'
import GameCard from "./GameCard"
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

class GameCollection extends React.Component {
    render() {
    return (
      <CardDeck>
          {this.props.games.map(game => <GameCard game={game} key={game.id} />)}
      </CardDeck>
    );
  }
}
export default GameCollection