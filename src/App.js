import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Main from './components/Main'

import './css/Primary-Styles.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Main className='Primary-Styles' />
      </BrowserRouter>
    )
  }
}
export default App
