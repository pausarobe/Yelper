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
		return (<div>
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body…</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
			<button type="button" className="btn btn-default btn-lg btn-block">Yelper</button>
			</div>
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