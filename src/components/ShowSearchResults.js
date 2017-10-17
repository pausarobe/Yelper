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
		        url: ''   
      		}]
    	}
	}
	getApiData(){
	    getYelpData(this.props.match.params.query).then(
	      dataSearchYelp => {
	      	console.log(this.props.match.params.query)
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
	                  url: yelpData.url
	              })
	          })
	        })
      })
  	}

  	componentDidMount(){
    	this.getApiData()
  	}
	render(){
		console.log(this.state)
		return (
			<div>
			 <Header/>
				<h1>Estoy en la ShowSearchResults</h1> 
				<Results inputresults={this.state}/>
			</div>
		)
	}
}

export default ShowSearchResults;