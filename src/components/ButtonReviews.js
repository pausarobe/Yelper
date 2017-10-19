import React, { Component } from 'react'
import { getYelpDataById, getYelpDataStaticById } from '../services/Api.js'
import { Button, Popover, Tooltip, Modal, Image, Row, Col, Jumbotron } from 'react-bootstrap'

class ButtonReviews extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      result: [{
        text: '',
        rating: '',
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
  getInitialState () {
    return { showModal: false }
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }
  getApiData () {
    const image_default = '../img/undef_profile.png'
    getYelpDataById(this.props.id).then(
      reviewsData => {
        console.log(reviewsData)
        this.setState ({
          result: [...reviewsData]
          .map(function (review) {
            return ({
              rating: review.rating,
              text: review.text,
              time_created: review.time_created,
              url: review.url,
              image_url: true && review.user.image_url || image_default,
              name: review.user.name
            })
          })
        })
      }
    )
  }
  getApiDataStatic () {
    const image_default = '../img/undef_profile.png'
    this.setState ({
      result: [...getYelpDataStaticById()]
      .map(function(review) {
        return ({
          rating: review.rating,
          text: review.text,
          time_created: review.time_created,
          url: review.url,
          image_url: true && review.user.image_url || image_default,
          name: review.user.name
        })
      })
    })
  }
  componentDidMount () {
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
            <container>
              <h4>REVIEWS</h4>
              <h3>keep calm & search easy...</h3>
            </container>
            
            {this.state.result.map(function(showReview) {
              return (
                <Jumbotron>
                  <div className="container">
                    <Row>
                      <Col md={4}>
                        <Image src={showReview.image_url} circle />
                      </Col>
                      <Col md={8}>
                        <p><strong>Valoration:</strong> {showReview.rating}</p>
                      </Col>
                      <Col md={8}>
                        <p>{showReview.text}</p>
                      </Col>
                      <Col md={12}>
                        <p>{showReview.name}</p>
                      </Col>
                      <Col md={12}>
                        <p>{showReview.time_created}</p>
                      </Col>
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
