import React, { Component } from 'react'
import {getYelpDataById } from '../services/Api.js'
import { FormGroup, FormControl, InputGroup, Button,Popover,Tooltip,Modal,OverlayTrigger } from 'react-bootstrap'

class ButtonReviews extends Component { 
	constructor() {
		super()
	    this.state = {
	      showModal:false,
	      text: '',
	      time_created: '',
	      url: '',
	      image_url: '',
	      name: ''
	    }
	    this.open=this.open.bind(this)
	    this.close=this.close.bind(this)
	    this.getInitialState=this.getInitialState.bind(this)
	}
getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
  	this.setState({ showModal: true });
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
        <Button
          bsStyle="default"
          bsSize="large"
          onClick={this.open}
        >
          show user reviews
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>YelperBCN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>USER REVIEWS</h2>
            <p>user comments and valorations</p>
            <hr />
            <h4>keep calm and search easy...</h4>
            {this.state.id.map(function(showReview) {
            	<div>
            		<figure>
            			<Image src={showReview.image_url} alt={showReview.name} responsive />
	            	</figure>
	            	<p>{showReview.name}</p>
	            	<p>{showReview.text}</p>
	            	<p>{showReview.url}</p>
	            	<p>{showReview.time_created}</p>
            	</div>
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
	)} 
}

export default ButtonReviews
