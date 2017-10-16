import React, { Component } from 'react';
import { FormGroup, FormControl }  from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class SearchForm extends Component {
	constructor(){
		super()
		this.state={
			value: '',
			fireRedirect: false
		}
		this.handleChange = this.handleChange.bind(this)
   		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e) {
		this.setState({ value: e.target.value })
	}

	handleSubmit(e){
		e.preventDefault()
		this.setState({ fireRedirect: true })	
	}
	render(){
		return (
		<div>
			<form onSubmit={ this.handleSubmit }>
		    	<FormGroup>
		        	<FormControl 
		              type="text" 
		              onChange={this.handleChange}
		              autoFocus
		              placeholder="pizzeria, bar pepe, club de tenis..."
		            />
		        {
		        	this.state.fireRedirect && this.state.value &&
		          	<Redirect to={`/search/${this.state.value}`} push/>
		        }
		        </FormGroup>
		    </form>
		</div>
		)}
}
export default SearchForm;