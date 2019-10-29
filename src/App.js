import React, { Component } from 'react';
import GitHubCard from './components/GitHubCard';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [],
      name: ''
    }

  }
render(){
  return (
      <div className="App">
        <GitHubCard />
      </div>
    );
}

}

export default App;
