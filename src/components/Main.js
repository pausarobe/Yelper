import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Filters from './Filters'
import Home from './Home'
import ShowSpecificResults from './ShowSpecificResults'

const Main = (props) => {
	return (
  	<div>
  		<Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search/:query' component={Filters} />
        <Route path='/specific/:query' component={ShowSpecificResults} />
      </Switch>
    </div>
  )
}

export default Main
