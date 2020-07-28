import React from 'react'
import GameCollection from '../components/GameCollection'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class MainPage extends React.Component{
    render() {
        return (
          <div>
            This is the main page which should render when first directing to
            the site.
            <Jumbotron>
              <h1>Welcome to Game Vibes!</h1>
              <p>
                Here you will find a list of games and the resulting reviews
                from fellow enthusiasts. Enjoy!
              </p>
              <p>
                <Button variant="primary">Sign Up</Button>
              </p>
            </Jumbotron>
            <GameCollection />
          </div>
        );
    }
}
export default MainPage