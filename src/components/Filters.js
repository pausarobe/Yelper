import React, {Component} from 'react';
import { Button } from 'react-bootstrap'
import Results from './Results'
import {getYelpData } from '../services/Api.js'
import Navbar from './Navbar'


class Filters extends Component {
  constructor() {
    super()
    this.state = {
      value: '',      
    }
  }

ClickForOnlyOpen(){

		//functionFilter = () => {

		//		console.log(this.props)
		//return is_closed: false
	//}

}
// 	 this.setState({ 		
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


	render() {
		return ( 
			<div> 
//return is_closed:false
		<button type="button" class="btn btn-outline-warning" > Mostrar solo locales abiertos </button>

</div>)

	}
}

export default Filters;