import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  componentDidMount () {
      axios.get('https://api.yelp .com/v3/businesses/search?term=Sushi&location=Boston', {
          headers: {
              Authorization: `Bearer RmHQV-aiyyC-8L0UnKViDsgcCxXiTpIFvV2tfqO5TM4l6poX81umJNu8pctONiOpdMD1JAC27_LD0NeNNfS1_q_nXe9es8bAYol8MXOL_Up4OAMDc8vfmCo6rXPkWXYx`
          }
      })
      .then(function (res) {
          console.log(res)
      })
      .catch(function (err) {
          console.log(err)
      })
  }

  render () {
    return (<h1>Esto es yelper </h1>)
  }
}

export default App
