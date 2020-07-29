import React from 'react'
import GameCard from "./GameCard"

class GameCollection extends React.Component {
  renderGames = () => {
    return this.props.games.map((games, index) => {
      return <GameCard games={games} key={index} />;
    });
  };
    render() {
        console.log(this.props)
    return (
      <div>
        Game Collection: where the games are and it renders the cards.
        {<GameCard />}
      </div>
    );
  }
}
export default GameCollection