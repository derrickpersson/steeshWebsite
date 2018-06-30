import React, { Component } from 'react';
import hero from './steeshHeroImage.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                THis is a title
              </h1>
              <h2 class="subtitle">
                This is a subtitle
                <img src={hero} alt="logo" />
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
