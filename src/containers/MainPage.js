import React from 'react'
import GameCollection from '../components/GameCollection'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MainPage extends React.Component{
    render() {
        return (
          <div>
            <Jumbotron fluid >
              <Container>

                <h1>Game Vibes</h1>
          
              <p>
                We give you the deets to find the games you love
              </p>
              <p>
                <Link to="/signup">
                  <Button className="search-button" variant="primary">Sign Up</Button>
                </Link>
              </p>
              </Container>
            </Jumbotron>
          </div>
        );
    }
}
export default MainPage