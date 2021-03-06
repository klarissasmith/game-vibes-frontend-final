import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import NavBar from "./components/NavBar";
import MainPage from "./containers/MainPage";
import GameCollection from "./components/GameCollection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Detail from "./containers/Detail"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card } from "react-bootstrap";

const GamesURL = "http://localhost:3000/games";
const ReviewsURL = "http://localhost:3000/reviews"
const UsersURL = "http://localhost:3000/users"
const LoginURL = "http://localhost:3000/login"

const token = () => localStorage.getItem("token")

class App extends React.Component {
  state = {
    games: [],
    reviews: [],
    auth: {
      user: {
        isLoggedIn: false
      }
    },
    
  };
  
  // FETCHES FOR CONTENT - GAMES, REVIEWS
  componentDidMount() {
    fetch(GamesURL)
    .then((response) => response.json())
    .then((data) => this.setState({ games: data }))
    .then((reviews) =>
    fetch(ReviewsURL)
    .then((response) => response.json())
    .then((data) => this.setState({ reviews: data }))
    );

  }
  //POST FETCHES FOR SIGN UP AND LOGIN
  createNewUser = (user) => {
    fetch(UsersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
  }
  

  loginFetch = (currentUser) => {
    return fetch(LoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
      },
      body: JSON.stringify(currentUser)
    }).then(response => response.json())
  }
  
  login = (data) => {
    console.log(data)
    localStorage.setItem("token", data.token)
    this.setState({ auth: { ...this.state.auth, user: { id: data.user_id, username: data.username, isLoggedIn: true}}})
    console.log(this.state.auth.user)
  }

  logout = () => {

  }
  
  createNewReview = (review) => {
    fetch(ReviewsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ review })
   }).then(this.setState({reviews: [...this.state.reviews, {...review}]}))
}
  
  removeReview = (reviewId) => {
    const updatedReviews = this.state.reviews.filter(review => review.id !== reviewId)
    console.log(updatedReviews)
    this.setState({reviews: updatedReviews })
  }


//THE APP
  render() {

    return (
      <div>
        <Router>
          <NavBar handleLogout={this.logout} currentUser={this.state.auth.user}/>
          <Route exact path="/" component={MainPage} />
          <Route
            exact
            path="/"
            render={() => <CardGroup> <GameCollection games={this.state.games} /> </CardGroup>}
          />
          <Route
            exact
            path="/games"
            render={() => <GameCollection games={this.state.games} />}
          />
          <Route
            path="/games/:id"
            render={(props) => (
              <Detail
                {...props}
                auth={this.state.auth}
                games={this.state.games}
                reviews={this.state.reviews}
                createNewReview={this.createNewReview}
                removeReview={this.removeReview}
              />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <SignUp {...props} createNewUser={this.createNewUser} />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} loginFetch={this.loginFetch} onLogin={this.login}/>
            )}
          />
        
        </Router>
      </div>
    );
  }
}

export default App;