import React, { Component } from 'react';
import API from './services/image-api';

import axios from 'axios';
// style

// import './App.scss'

// const BASE_URL = 'https://restcountries.eu/rest/v2';

class App extends Component {
  state = {
    searchQuery: 'toys',
    currentPage: 1,
    perPage: 12,
    imageType: 'photo',
    orientation: 'horizontal',
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.currentPage}&key=21266258-ed1f1a426d97c1dcb24ced78e&image_type=${this.state.imageType}&orientation=${this.state.orientation}&per_page=${this.state.perPage}`,
    )
      .then(response => {
        if (!response) {
          throw response;
        }
        return response.json();
      })
      .then(response => console.log(response.hits));
  }
  render() {
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}

export default App;
// return fetch(`${BASE_URL}/name/${querySelector}`).then(response => {
//   if (!response.ok) {
//     throw response;
//   }
//   return response.json();
// });
