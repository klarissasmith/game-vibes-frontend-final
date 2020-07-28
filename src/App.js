import React from 'react';
import NavBar from './components/NavBar'
import MainPage from './containers/MainPage'
import GameCollection from './components/GameCollection'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  
  state = {
    games: [],
    reviews: []
  }
  
  componentDidMount() {
    fetch("http://localhost3000/games").then(response => response.json()).then(data => this.setState({games: data}))
  }
  
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Route exact path="/" component={MainPage} />
          <Route exact path="/games" component={GameCollection} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login}/>
        </Router>
      </div>
    );
  }
}



export default App;
