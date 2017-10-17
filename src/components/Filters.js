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
    this.onHandle=this.onHandle.bind(this)
  }


// this.setState({ 		
// 	 		this.props.filters:[...dataSearchYelp].filter(functionFilter).map(function(yelpData){
// 	              return (   {
// 	                  id: yelpData.id,
// 	                  name: yelpData.name,
// 	                  image_url: yelpData.image_url,
// 	                  is_closed: yelpData.is_closed,
// 	                  rating: yelpData.rating
// 	              })
// 	          })
// 	        })          
// }
	getFilter(){
		
		console.log(this.state.result.filter(function(yelpData){
						
						return console.log('holaa')
			 }
		))
	}

	onHandle(){
		//console.log(this.state.result[0].is_closed)
		this.setState({
			result:this.state.result.map(function(yelpData){
				 return (   {
	                  id: yelpData.id,
	                  name: yelpData.name,
	                  image_url: yelpData.image_url,
	                  is_closed: yelpData.is_closed,
	                  rating: yelpData.rating,
	                  city: yelpData.city,
	                  url: yelpData.url,
	                  address: yelpData.address1,
	                  phone: yelpData.display_phone
	              })
			})
	        //   result:[dataSearchYelp]
	        //     .map(function(yelpData){
	        //       return (   {
	        //           id: yelpData.id,
	        //           name: yelpData.name,
	        //           image_url: yelpData.image_url,
	        //           is_closed: yelpData.is_closed,
	        //           rating: yelpData.rating,
	        //           city: yelpData.location.city,
	        //           url: yelpData.url,
	        //           address: yelpData.location.address1,
	        //           phone: yelpData.display_phone
	        //       })
	        //   })
	         })
		 this.getFilter()
		//console.log('iterado',this.state.results)
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
	
		return ( 
			<div>
			 <Header/>
				<div className="container"> 
					<button type="button"  onClick={this.onHandle} className="btn btn-outline-warning" > Mostrar solo locales abiertos </button>
				</div>
				<Results inputresults={this.state.result}/>
			</div>
		)

	}
}

export default Filters;