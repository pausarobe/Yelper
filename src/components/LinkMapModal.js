import React, { Component } from 'react'
import { Row, Col, Jumbotron, Button, Popover, Tooltip, Modal, Image } from 'react-bootstrap'
import ShowMaps from './Map'

class LinkMapModal  extends Component {
	constructor(){
		super()
		this.state={
			 showModal:false
		}
		this.open=this.open.bind(this)
		this.close=this.close.bind(this)
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

	render(){
		console.log("LinkMap",this.props)
		return (
			<div>
				<li className="glyphicon"><span className="glyphicon-force-font glyphicon-map-marker">&nbsp;</span> 
					<a onClick={this.open}> GOOGLE MAPS{this.props.address} - ({this.props.city})</a>
				</li>
				<Modal show={this.state.showModal} onHide={this.close} bsSize={this.large}>
		        	<Modal.Header closeButton>
			        	<Modal.Title>Google Maps</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			          <ShowMaps
						containerElement={<div style={{ height: `400px` }} />}
						 mapElement={<div style={{ height: `100%` }} />}
						 lat={this.props.latitude}
						 lng={this.props.longitude}
					 />
			        </Modal.Body>
			        <Modal.Footer>
			        	<Button onClick={this.close}>Close</Button>
			        </Modal.Footer>
			    </Modal>
		    </div>
	    )}
	}

export default LinkMapModal;
