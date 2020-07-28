import React from 'react';
import NavBar from './components/NavBar'
import MainPage from './containers/MainPage'
import GameCollection from './components/GameCollection'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/games" component={GameCollection} />
        </Router>
      </div>
    );
  }
}



export default App;
