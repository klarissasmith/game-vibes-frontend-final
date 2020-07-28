import React from 'react'
import GameCard from "./GameCard"

class GameCollection extends React.Component{
    render() {
        return (
            <div>
                Game Collection: where the games are and it renders the cards.
                 {<GameCard />}
            </div>
        )
    }
}
export default GameCollection