import React, { Component } from 'react';
import API from './services/image-api';

import axios from 'axios';
// style

import './App.scss';

const BASE_URL = 'https://restcountries.eu/rest/v2';
class App extends Component {
  componentDidMount() {
    fetch(
      `https://pixabay.com/api/videos/?key=21266258-ed1f1a426d97c1dcb24ced78e&q=yellow+flowers'`,
    )
      .then(response => { 43