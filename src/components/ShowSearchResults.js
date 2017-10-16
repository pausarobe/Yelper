import React, { Component } from 'react';
import Results from './Results'
import {getTestData } from '../services/Api.js'

class  ShowSearchResults extends Component {
	constructor(){
		super()
		this.state={

		}
	}
	render(){
		return (
			<div>
				<h1>Estoy en la ShowSearchResults</h1> 
				<Results/>
			</div>
		)
	}
}

export default ShowSearchResults;