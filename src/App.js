import React, { Component } from 'react';
import {getToken} from './services/Api.js'


class App extends Component {
  render() {
  	const callApi= getToken()
    return ( <h1>Esto es yelper </h1>)
  }
}

export default App;
