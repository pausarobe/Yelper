import React from 'react'
import { Navbar,FormGroup,Button,FormControl } from 'react-bootstrap'
import SearchForm from './SearchForm'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Header = () => (
	<div>
	 <Navbar inverse collapseOnSelect>
	 	<Navbar.Header>
	    	<Navbar.Brand>
	    	 	<Link to='/'>Yelper</Link>
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