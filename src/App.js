<<<<<<< HEAD
import React, { Component } from 'react'
import {getToken} from './services/Api.js'
=======
import React, { Component } from 'react';
import {getTestData } from './services/Api.js'
>>>>>>> 3c6bca4a36eee336edba11041fcd78e119dad5ca
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
<<<<<<< HEAD
  render () {
    const callApi = getToken()
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
=======
  render() {
  	const callApi= getTestData()
    return ( 
    	<BrowserRouter>
    		<Main />
    	</BrowserRouter>
    	)
>>>>>>> 3c6bca4a36eee336edba11041fcd78e119dad5ca
  }
}

export default App
