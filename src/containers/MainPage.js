import React from 'react'
import GameCollection from '../components/GameCollection'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainPage extends React.Component{
    render() {
        return (
          <div>
            <Jumbotron>
              <h1>Welcome to Game Vibes!</h1>
              <p>
                Here you will find a list of games and the resulting reviews
                from fellow enthusiasts. Enjoy!
              </p>
              <p>
                <Link to="/signup">
                <Button variant="primary">Sign Up</Button>
                </Link>
              </p>
            </Jumbotron>
          </div>
        );
    }
}
export default MainPage