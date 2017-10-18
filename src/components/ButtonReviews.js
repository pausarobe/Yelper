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

















// import React, { Component } from 'react'
// import Reviews from './Reviews'
// import {getYelpDataById } from '../services/Api.js'
// import Header from './Navbar'

// class  ShowSpecificResults extends Component {
//   constructor () {
//     super()
//     this.state = {
//       result: [{
//         rating: '',
//         text: '',
//         time_created: '',
//         url: '',
//         image_url: '',
//         name: ''
//       }]
//     }
//   }
//   getApiData () {
//     getYelpDataById(this.props.match.params['id']).then(
//       dataSearchYelp => {
//         console.log(this.props.match.params.id)
//         this.setState({
//           result: [...dataSearchYelp]
//             .map(function (yelpData) {
//               return ({
//                 rating: '',
//                 text: '',
//                 time_created: '',
//                 url: '',
//                 image_url: '',
//                 name: ''
//               })
//             })
//         })
//       }
//     )
//   }
//   componentWillReceiveProps (nextProps) {
//     this.props = nextProps
//     this.getApiData()
//   }
//   // componentDidMount=() => {
//   //   var idToSearch = this.props.match.params['id']
//   //   getYelpDataById(idToSearch).then((data)=>{
//   //     console.log(this.props.match.params.id)
//   //     this.setState({
//   //         result: [...getYelpDataById]
//   //           .map(function (yelpData) {
//   //             return ({
//   //               rating: '',
//   //               text: '',
//   //               time_created: '',
//   //               url: '',
//   //               image_url: '',
//   //               name: ''
//   //             })
//   //           })
//   //       })
//   //   })
//   // }
//   render () {
//     console.log(this.state)
//     return (
//       <div>
//         <Header />
//         <Reviews userReviews={this.state} />
//       </div>
//     )
//   }
// }

// export default ShowSpecificResults