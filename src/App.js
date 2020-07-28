import React from 'react';
import NavBar from './components/NavBar'
import MainPage from './containers/MainPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainPage />
      </div>
    )
  }
}



export default App;
