import React from 'react'
import GameCard from "./GameCard"
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";


class GameCollection extends React.Component {
  renderGames = () => {
    return this.props.games.map((games, index) => {
      return <GameCard games={games} key={index} />;
    });
  };
    render() {
    return (
      <CardDeck>
          {this.props.games.map(game => <GameCard game={game} key={game.id} />)}
      </CardDeck>
    );
  }
}
export default GameCollection