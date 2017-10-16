import React, { Component } from 'react';
import {getTestData } from './services/Api.js'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
  	const callApi= getTestData()
    return ( 
    	<BrowserRouter>
    		<Main />
    	</BrowserRouter>
    	)
  }
}

export default App;
