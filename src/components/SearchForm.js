import React from 'react';
import { FormGroup, FormControl }  from 'react-bootstrap';

const SearchForm = () => (
	<div>
	<form  className="SearchForm" onSubmit={ this.handleSubmit }>
		        <FormGroup bsSize='large'>
		        	<FormControl 
		              type="text" 
		              onChange={this.handleChange}
		              autoFocus
		              placeholder="Find Movies"
		            />
		        </FormGroup>
		       </form>
	</div>
	)

export default SearchForm;