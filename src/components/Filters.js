import React, {Component} from 'react'
import Results from './Results'
import {getYelpData,getYelpDataStatic} from '../services/Api.js'
import Header from './Navbar'
import Footer from './Footer'
import { Navbar } from 'react-bootstrap'
import ButtonReviews from './ButtonReviews'
import './Filter.css'

class Filters extends Component {
    constructor() {
        super()
        this.state = {
            results: [],
            sortMaxToMin: false
        }
        this.getFilter = this.getFilter.bind(this)
        this.getFilterRating = this.getFilterRating.bind(this)

    }

    getFilter() {
        this.setState({
            results: this.state.results
                .filter(function (yelpData) {
                    return yelpData.is_closed === false
                })
        })
    }

    getFilterRating() {
        if(this.state.sortMaxToMin === true){
             this.setState(prevState => {
                results:prevState.results.sort((buss1, buss2) => {
                    return buss1.rating - buss2.rating;
                })
            })
            this.setState({
                sortMaxToMin:false
            })

            this.forceUpdate()
            
        }else{
            this.setState(prevState => {
                results:prevState.results.sort((buss1, buss2) => {
                    return buss2.rating - buss1.rating;
                })
            })
            this.setState({
                sortMaxToMin:true
            })

            this.forceUpdate()
        }
    }

    getApiData() {
        getYelpData(this.props.match.params.query).then(
            dataSearchYelp => {
                this.setState({
                    results: [...dataSearchYelp]
                        .map(function (yelpData) {
                            return (   {
                                id: yelpData.id,
                                name: yelpData.name,
                                image_url: yelpData.image_url,
                                is_closed: yelpData.is_closed,
                                rating: yelpData.rating,
                                city: yelpData.location.city,
                                url: yelpData.url,
                                address: yelpData.location.address1,
                                phone: yelpData.display_phone
                            })
                        })
                })

            })

    }
    getApiDataStatic() {
         this.setState({
                    results: [...getYelpDataStatic()]
                        .map(function (yelpData) {
                            return (   {
                                id: yelpData.id,
                                name: yelpData.name,
                                image_url: yelpData.image_url,
                                is_closed: yelpData.is_closed,
                                rating: yelpData.rating,
                                city: yelpData.location.city,
                                url: yelpData.url,
                                address: yelpData.location.address1,
                                phone: yelpData.display_phone
                            })
                        })
                })
            
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps
        this.getApiData()

    }

    componentDidMount() {
        this.getApiDataStatic()
    }

    render() {
        //console.log("filters", this.state)
        return (
          <div>
            <Header/>
            <div className="container">
              <div className="filters">
                <button type="button" onClick={this.getFilter} className="btn btn-default btn-md">asignar filtro</button>
                <button type="button" onClick={this.getFilterRating} className="btn btn-default btn-md">Top rated</button>
                </div> 
              </div>
              <Results inputresults={this.state.results}/>              
              <Footer/>
          </div>
        )
    }
}

export default Filters;