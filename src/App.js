import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default App;
