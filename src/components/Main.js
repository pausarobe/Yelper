import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ShowSearchResults from './ShowSearchResults'
import bootstrap from 'react-bootstrap'

const Main = (props) => {
	return (
	<div>
		<Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/search/:query' component={ShowSearchResults}/>
	    </Switch>
  	</div>
	)}

export default Main;