import React, {Component} from 'react'
import { getYelpDataById } from '../services/Api.js'

class ShowSpecificResults extends Component {
  componentDidMount=()=>{
    var idToSearch = this.props.match.params['id']
    getYelpDataById(idToSearch).then((data)=>{
      console.log(data)
    })
  }
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>ShowSpecificResults</h1>
        </div>
      </div>
    )
  }
}

export default ShowSpecificResults
