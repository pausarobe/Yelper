import React, {Component} from 'react'
import './Results.css'
import { Link } from 'react-router-dom'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Results extends Component {

    render() {

    return (
      <div className="container">
        <div className="row">
          <div className="well">
            <div className="list-group">
              {this.props.inputresults.map((res) => {
                return (
                  <a className="results-a list-group-item">
                    <div className="media col-md-3">
                      <figure className="pull-left">
                        <img id="bussines-img" className="media-object img-rounded img-responsive" src={res.image_url} alt="placehold.it/350x250" />
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <h2  className="list-group-item-heading center"> {res.name} </h2>
                      <ul>
                        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-map-marker">&nbsp;</span> {res.address} - ({res.city})</li>
                        <br/>
                        <li className="glyphicon glyphicon-time">&nbsp; {res.is_closed === false ? 'Open' : 'Close'}</li>
                        <br/>
                        <li className="glyphicon glyphicon-phone-alt">&nbsp; {res.phone.replace('+34', '')}</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-center">
                      <Link to='/specific/:id'><button type="button" className="btn btn-default btn-lg btn-block">Yelper</button></Link>
                      <Rater interactive={false} rating={res.rating} />
                      <p> Average {res.rating} <small> / </small> 5 </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Results;

