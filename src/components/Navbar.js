import React from 'react'
import { Navbar,FormGroup,Button,FormControl } from 'react-bootstrap'
import SearchForm from './SearchForm'

const Header = () => (
	<div>
	 <Navbar inverse collapseOnSelect>
	 	<Navbar.Header>
	    	<Navbar.Brand>
	        	<a href="#">Yelper</a>
	      	</Navbar.Brand>
	    	<Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	    	<Navbar.Form pullRight>
	        	<SearchForm />
	       	</Navbar.Form>
	    </Navbar.Collapse>
	 </Navbar>
	</div>
  
	)

export default Header