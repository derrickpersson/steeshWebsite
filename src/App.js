import React, { Component } from 'react';
import hero from './steeshHeroImage.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero is-primary is-medium">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand">
                  <a class="navbar-item">
                    <h1 class="title">Steesh</h1>
                  </a>
                  <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <span class="navbar-item">
                      <a class="button is-primary is-inverted">
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="hero-body">
            <div class="container has-text-centered">
              <section class="level">
                <div class="level-item">
                  <img src={hero} alt="steeshHero" />
                </div>
                <div class="level-item">
                  <div class="content">
                    <h2 class="title">Save articles directly to your Kindle</h2>
                    <p>
                      Pick up where you put it down
                    </p>
                    <a class="button is-inverted is-primary is-large"> Add to Chrome - it's Free </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Steesh</strong> made with 🌧 in YVR.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
