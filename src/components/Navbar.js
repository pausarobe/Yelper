import React from 'react'
import { Navbar } from 'react-bootstrap'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import Filters from './Filters.js'

const Header = () => (

	<div>
		<Navbar collapseOnSelect fixedTop>
	 		<Navbar.Header>
	    	<Navbar.Brand>

	    	 	<Link to='/'>Yelper</Link>
	      </Navbar.Brand>
	    	<Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	    	<Navbar.Form pullRight >
	        <SearchForm />
	      </Navbar.Form>
	    </Navbar.Collapse>
	   
	 	</Navbar>
	</div>
)

export default Header
