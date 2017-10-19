import React, { Component } from 'react';
import Results from './Results'
import {getYelpData } from '../services/Api.js'
import Header from './Navbar'
import './Show.css'

class  ShowSearchResults extends Component {
	constructor(){
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
	}
	getApiData(){
		const business_default = 'https://renderman.pixar.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'

	    getYelpData(this.props.match.params.query).then(
	      dataSearchYelp => {
	      	this.setState({
	          result:[...dataSearchYelp]
	            .map(function(yelpData){
	              return (   {
	                  id: yelpData.id,
	                  name: yelpData.name,
	                  image_url: true && yelpData.image_url || business_default,
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
    	this.getApiDataStatic()
  	}
	render(){
		return (
			<div>
			 <Header/>
				<Results inputresults={this.state}/>
			</div>
		)
	}
}

export default ShowSearchResults;