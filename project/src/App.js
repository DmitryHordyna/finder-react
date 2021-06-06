import React, { Component } from 'react';
import API from './services/image-api';
// style

import './App.scss';
class App extends Component {
  getFeatch = () => {
    API.featchImages().then(res => console.log(res));
  };

  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <button type="button" onClick={this.getFeatch}>
              click
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
