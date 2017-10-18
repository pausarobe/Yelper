import React, { Component } from 'react'
import {getYelpDataById,getYelpDataStaticById } from '../services/Api.js'
import { FormGroup, FormControl, InputGroup, Button,Popover,Tooltip,Modal,OverlayTrigger } from 'react-bootstrap'

class ButtonReviews extends Component { 
	constructor() {
		super()

	    this.state = {
	      showModal:false,
        result: []
	    }	
	    this.open=this.open.bind(this)
	    this.close=this.close.bind(this)
	    this.getInitialState=this.getInitialState.bind(this)
      this.getApiDataStatic=this.getApiDataStatic.bind(this)
	}
getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
  	this.setState({ showModal: true });
    //this.getApiDataStatic()
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
  getApiDataStatic(){
      const image_default = '../img/undef_profile.png'
      //console.log("DATOS",...getYelpDataStaticById())
      this.setState ({
            result:[...getYelpDataStaticById()]
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
       console.log("estateButton",this.state)
      }
      
    
      
  	componentDidMount(){
    	//this.getApiData()
      this.getApiDataStatic()
  	}	

	render() {
		 const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

		return (
			<div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
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