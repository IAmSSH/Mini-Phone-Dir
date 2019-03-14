import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Add from './components/Add'
import Home from './components/Home'

class App extends Component {

  changestate = (e) => {
    console.log(e);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/add' component={Add} />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
