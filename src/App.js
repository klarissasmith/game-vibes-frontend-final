import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainPage from "./containers/MainPage";
import GameCollection from "./components/GameCollection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Detail from "./containers/Detail"
import { BrowserRouter as Router, Route } from "react-router-dom";

const URL = "http://localhost:3000/games";
const ReviewsURL = "http://localhost:3000/reviews"

class App extends React.Component {
  state = {
    games: [],
    reviews: [],
    currentUser: {
      username: "", 
      password: "",
    }
  };


  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.setState({ games: data }))
      .then((d) =>
        fetch(ReviewsURL)
          .then((response) => response.json())
          .then((data) => this.setState({ reviews: data }))
      );
  }


  render() {

    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={MainPage} />
          <Route exact path='/games'
            render={() => (
              <GameCollection games={this.state.games} />
            )}
          />
          <Route path="/games/:id" render={(props) => <Detail {...props} games={this.state.games} reviews={this.state.reviews}/>} />
          <Route path="/signup" render={(props) => <SignUp {...props} currentUser={this.state.currentUser}/>} />
          <Route path="/login" component={Login} />
        
        </Router>
      </div>
    );
  }
}

export default App;
{/* <Route path='/dashboard' render={(props) => (<Dashboard {...props} isAuthed={true} />)} />
<Route exact path='/games' render={(props) => (<GameCollection {...props} games={this.state.games} />)} /> */}