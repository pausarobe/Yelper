import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'

import '../css/InputForm.css'

class SearchForm extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      fireRedirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }
  componentWillReceiveProps() {
    this.setState({ 
      value: '',
      fireRedirect: false
    })
  }

  render () {
    const { fireRedirect, value: query } = this.state
    return (
      <form className="SearchForm" onSubmit={ this.handleSubmit }>
        <FormGroup>
          <InputGroup bsSize='lg'>
            <FormControl
              classNanme="input-button"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              autoFocus
              placeholder="sushi, gym, restaurant, starbucks,..."
            />
            <InputGroup.Button>
              <Button>Find It!</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        {
          fireRedirect && query &&
          <Redirect to={`/search/${query}/page/1`} push />
        }
      </form>
    )
  }
}

export default SearchForm
