import React, { Component } from 'react';
import {getToken} from './services/Api.js'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
  	const callApi= getToken()
    return ( 
    	<BrowserRouter>
    		<Main />
    	</BrowserRouter>
    	)
  }
}

export default App;
