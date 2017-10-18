import React, { Component } from 'react'
import {getYelpDataById } from '../services/Api.js'

class ButtonReviews extends Component { 
	constructor() {
		super()

	    this.state = {
	      result: [{
	        rating: '',
	        text: '',
	        time_created: '',
	        url: '',
	        image_url: '',
	        name: ''
	      }]
	    }	
	}

	getApiData(){

		const image_default = '../img/undef_profile.png'

		getYelpDataById(this.props.id).then(
			reviewsData => {
				console.log(reviewsData)

			this.setState ({
	          result:[...reviewsData]
	            .map(function(review){
	            	return ({rating: review.rating,
	            		        text: review.text,
	            		        time_created: review.time_created,
	            		        url: review.url,
	            		        image_url: true && review.user.image_url || image_default,
	            		        name: review.user.name
	            		    })
	          	})       
	        })
			})
	}

  	componentDidMount(){
    	this.getApiData()
  	}	

	render() {
		return (<button type="button" className="btn btn-default btn-lg btn-block">Yelper</button>
	)}
  
}

export default ButtonReviews

