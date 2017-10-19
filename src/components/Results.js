import React, {Component} from 'react'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import ButtonReviews from './ButtonReviews'

import './Results.css'
import showMaps from './showMaps'

class Results extends Component {
    render() {
    return (<div>
      <div className="background-image2">
<div className="container">
        <div className="row">
          <div className="well">
            <div className="list-group">
              {this.props.inputresults.map((res) => {
                return (
                  <section key={res.id} className="results-a list-group-item">
                    <div className="media col-md-3">
                      <figure className="pull-left">
                        <img id="bussines-img" className="media-object img-rounded img-responsive" src={res.image_url} alt="image not provided" />
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <h2  className="list-group-item-heading center"> {res.name} </h2>
                      <ul>
                        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-map-marker">&nbsp;</span> {res.address} - ({res.city})</li>
                        <br/>
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
        <div className="container text-center">
            <ul className="pagination">
                <li className="disabled"><a href="#">«</a></li>
                <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
            </ul>
        </div>
    </div>
      </div>
      
    )
  }
}
export default Results



// <Link to={`/specific/${res.id}`} state={this.state}><button type="button" className="btn btn-default btn-lg btn-block">Yelper</button></Link>