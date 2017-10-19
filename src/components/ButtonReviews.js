import React, { Component } from 'react'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import {getYelpDataById, getYelpDataStaticById } from '../services/Api.js'
import { Row, Col, Jumbotron, Button, Popover, Tooltip, Modal, Image } from 'react-bootstrap'

import './ButtonReviews.css'

class ButtonReviews extends Component { 
    constructor() {
        super()
        this.state = {
          showModal:false,
          result: [{
            text: '',
              time_created: '',
              url: '',
              image_url: '',
              name: ''
          }]
          
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
        const image_default = 'http://www.naervaerk.dk/images/default-avatar.jpg'
        getYelpDataById(this.props.id).then(
            reviewsData => {
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
      const image_default = 'http://www.naervaerk.dk/images/default-avatar.jpg'
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
      }
      
    
      
    componentDidMount(){
        //this.getApiData()
      this.getApiDataStatic()
    } 

  render () {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    )
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    )
    return (
      <div clasName="container">
        <Button bsStyle="default" bsSize="large" onClick={this.open}>show user reviews</Button>
        <Modal show={this.state.showModal} onHide={this.close} bsSize={this.large}>
          <Modal.Header closeButton>
            <Modal.Title>YelperBCN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h4>REVIEWS</h4>
              <h3>keep calm & search easy...</h3>
            </div>
            {this.state.result.map(function(showReview) {
              return (
                <Jumbotron>
                  <div className="container">
                    <Row>
                      <Col md={4}>
                        <figure className="user-image">
                          <Image src={showReview.image_url} thumbnail rounded />
                          <figcaption><p>{showReview.name}</p></figcaption>
                        </figure>
                      </Col>
                      <div className="reviews-text">
                        <Col md={4}>
                          <Rater id="stars" interactive={false} rating={showReview.rating} />
                        </Col>
                        <Col md={4} >
                          <p> Average {showReview.rating} <small> / </small> 5 </p>
                        </Col>
                        <Col md={8}>
                          <p>{showReview.text}</p>
                        </Col>
                        <Col md={12}>
                          <p>Date of review: {showReview.time_created}</p>
                        </Col>
                      </div>
                    </Row>
                  </div>
                </Jumbotron>
              )
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ButtonReviews
