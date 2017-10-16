import React from 'react'
import SearchForm from './SearchForm'
import {Grid, Row, Col} from 'react-bootstrap'

import './Home.css'

const Home = () => (
  <div className="background-image">
    <Grid>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div>
            <h1>Yelper</h1>
            <h4>BARCELONA</h4>
            <SearchForm />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Home
