import React, { Component } from 'react';
import hero from './steeshHeroImage.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hero} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
