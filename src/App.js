import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from './pages/home';


class App extends Component {

  render() {
    return (
      <div className="App">
          <div>
             <Home/>
          </div>
      </div>
    );
  }
}

export default App;
