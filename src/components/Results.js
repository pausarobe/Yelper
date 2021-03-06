import React, {Component} from 'react'

import Rater from 'react-rater'
import ButtonReviews from './ButtonReviews'
import LinkMapModal from './LinkMapModal'

import 'react-rater/lib/react-rater.css'
import '../css/Results.css'

class Results extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="list-group">
              {this.props.inputresults.map((res) => {
                return (
                  <section key={res.id} className="results-a list-group-item">
                    <div className="media col-md-3">
                      <figure className="pull-left">
                        <img id="bussines-img" className="media-object img-rounded img-responsive" src={res.image_url} />
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <h2 className="list-group-item-heading center"> {res.name} </h2>
                      <ul>
                        <LinkMapModal address={res.address} city={res.city} latitude={res.latitude} longitude={res.longitude}/>
                        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-time">&nbsp;</span> {res.is_closed === false ? 'Open' : 'Close'}</li>
                        <br/>
                        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-phone-alt">&nbsp;</span> {res.phone.replace('+34', '')}</li>
                        <br/>
                        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-globe">&nbsp;</span> <a href={res.url}>{res.name}</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-center nolink">
                      <ButtonReviews id={res.id} />
                      <Rater id="stars" interactive={false} rating={res.rating}/>
                      <p> Average {res.rating} <small> / </small> 5 </p>
                    </div>
                  </section>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Results
