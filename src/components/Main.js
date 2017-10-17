import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Filters from './Filters'


const Main = (props) => {
	return (
	<div>
		<Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/search/:query' component={Filters}/>
	    </Switch>
  	</div>
	)}

export default Main;