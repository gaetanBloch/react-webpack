import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Link to="/" exact >Users</Link> |
          <Link to="/pizza">Pizza</Link>
        </div>
      </div>
    );
  }
}

export default App;
