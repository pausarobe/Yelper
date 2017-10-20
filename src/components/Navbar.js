import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm'

import '../css/Navbar.css'

const Header = () => (
  <div>
    <Navbar collapseOnSelect fixedTop inverse >
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'><div className="Yelp">YelperBCN</div></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight >
          <SearchForm style={'SearchForm-navbar'} />
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
