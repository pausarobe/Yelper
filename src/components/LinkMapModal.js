import React, { Component } from 'react'
import { Row, Col, Jumbotron, Button, Popover, Tooltip, Modal, Image } from 'react-bootstrap'

const LinkMapModal = (props) => (
        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-map-marker">&nbsp;</span> {props.address} - ({props.city})</li>
	)

export default LinkMapModal;