import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Link to="/" >Users</Link> |
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" component{Users} exact />
        </div>
      </div>
    );
  }
}

export default App;
