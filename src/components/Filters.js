import React, {Component} from 'react';
import { Button } from 'react-bootstrap'
import Results from './Results'
import {getYelpData } from '../services/Api.js'
import Header from './Navbar'
class Filters extends Component {
  constructor() {
    super()
    this.state={
            result: [{
                id: '',
                name: '',
                image_url: '',
                is_closed: '',
                rating: '',
                city: '',
                url: '', 
                address: '',
                phone: '' 
            }]
        }
    this.getFilter=this.getFilter.bind(this)
  }
    getFilter(){
		this.setState({
              result:this.state.result
              	.filter(function(yelpData){
              		return yelpData.is_closed === true 
              	})
                .map(function(yelpData){
                  return (   {
                      id: yelpData.id,
                      name: yelpData.name,
                      image_url: yelpData.image_url,
                      is_closed: yelpData.is_closed,
                      rating: yelpData.rating,
                      city: yelpData.city,
                      url: yelpData.url,
                      address: yelpData.address,
                      phone: yelpData.phone
                  })
              })
            })
		console.log("getFilter", this.state)
	}
    getApiData(){
        getYelpData(this.props.match.params.query).then(
          dataSearchYelp => {
            this.setState({
              result:[...dataSearchYelp]
              	.map(function(yelpData){
                  return (   {
                      id: yelpData.id,
                      name: yelpData.name,
                      image_url: yelpData.image_url,
                      is_closed: yelpData.is_closed,
                      rating: yelpData.rating,
                      city: yelpData.location.city,
                      url: yelpData.url,
                      address: yelpData.location.address1,
                      phone: yelpData.display_phone
                  })
              })
            })
      })
    }
    componentWillReceiveProps( nextProps ) {
        this.props=nextProps
        this.getApiData()
    
    }
    componentDidMount(){
        this.getApiData()
    }
    render() {
        console.log("filters", this.state)
        return ( 
            <div>
             <Header/>
                <div className="container"> 
                    <button type="button"  onClick={this.getFilter} className="btn btn-outline-warning" > Mostrar solo locales abiertos </button>
                </div>
                <Results inputresults={this.state.result}/>
            </div>
        )
    }
}
export default Filters;