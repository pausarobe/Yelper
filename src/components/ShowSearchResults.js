import React, { Component } from 'react';
import Results from './Results'
import {getYelpData } from '../services/Api.js'
import Header from './Navbar'

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
	    getYelpData(this.props.match.params.query).then(
	      dataSearchYelp => {
	      	console.log(dataSearchYelp)
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
	render(){
		console.log(this.state)
		return (
			<div>
			 <Header/>
				<Results inputresults={this.state}/>
			</div>
		)
	}
}

export default ShowSearchResults;