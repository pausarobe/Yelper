import React, {Component} from 'react'
import Results from './Results'
import {getYelpData,getYelpDataStatic} from '../services/Api.js'
import Header from './Navbar'
import Footer from './Footer'
import Pagination from './Pagination'
import { Redirect } from 'react-router-dom';  
import './Filter.css'

class Filters extends Component {
    constructor() {
        super()
        this.state = {
            results: [],
            numberItemsForPage: 5,
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
        const business_default = 'https://renderman.pixar.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
        getYelpData(this.props.match.params.query).then(
            dataSearchYelp => {
                this.setState({
                    results: [...dataSearchYelp]
                        .map(function (yelpData) {
                            return (   {
                                id: yelpData.id,
                                name: yelpData.name,
                                image_url: true && yelpData.image_url || business_default,
                                is_closed: yelpData.is_closed,
                                rating: yelpData.rating,
                                city: yelpData.location.city,
                                url: yelpData.url,
                                address: yelpData.location.address1,
                                phone: yelpData.display_phone,
                                latitude:yelpData.coordinates.latitude,
                                longitude:yelpData.coordinates.longitude
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
                                phone: yelpData.display_phone,
                                latitude:yelpData.coordinates.latitude,
                                longitude:yelpData.coordinates.longitude
                            })
                        })
                })
            
    }
    getNumberOfItemsForPage(){
        return Math.floor(this.state.results.length / this.state.numberItemsForPage )

    }
    getResultsLimitForPage(){
        const startPosition= ((this.props.match.params.page * this.state.numberItemsForPage)-this.state.numberItemsForPage)
        const endPosition =(this.props.match.params.page * this.state.numberItemsForPage)
        return this.state.results.slice(startPosition,endPosition)
         
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps
        this.getApiData()

    }
    componentDidMount() {
        this.getApiDataStatic()
        this.getFilterRating()
        //static
    }

    render() {
      return (
        <div>
          <Header />
          <div className="background-image-results">
            <div className="container">
              <div className="filters text-center">
                <button type="button" onClick={this.getFilter} className="btn btn-default btn-md"> Mostrar solo locales abiertos</button><span>&nbsp;</span>
                <button type="button" onClick={this.getFilterRating} className="btn btn-default btn-md">Top rated <li className="glyphicon"><span className="glyphicon-force-font glyphicon-sort"></span></li></button>
              </div>
            </div>
          <Results inputresults={this.getResultsLimitForPage()}/>
          <Pagination Items={this.getNumberOfItemsForPage()} pageActive={this.props.match.params.page} url={this.props.match.url}/>
          <Footer style={'position-nav-selector-none'}/>
        </div>
        </div>
      )
    }
}

export default Filters
