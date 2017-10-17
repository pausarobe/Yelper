import React, {Component} from 'react';
import Results from './Results'
import {getYelpData } from '../services/Api.js'
import Header from './Navbar'
import Footer from './Footer'

class Filters extends Component {
  constructor() {
    super()
    this.state={
            result: [{
                id: '',
                name: '',
                image_url: '',
                is_closed: '',
                rating: '',
                city: '',
                url: '', 
                address: '',
                phone: '' 
            }]
        }
    this.getFilter=this.getFilter.bind(this)
    this.getFilterRating=this.getFilterRating.bind(this)
   
  }
    getFilter(){
		this.setState({
              result:this.state.result
              	.filter(function(yelpData){
              		return yelpData.is_closed === false 
              	})
                .map(function(yelpData){
                  return (   {
                      id: yelpData.id,
                      name: yelpData.name,
                      image_url: yelpData.image_url,
                      is_closed: yelpData.is_closed,
                      rating: yelpData.rating,
                      city: yelpData.city,
                      url: yelpData.url,
                      address: yelpData.address,
                      phone: yelpData.phone
                  })
              })
            })
		//console.log("getFilter", this.state)
	}

	 getFilterRating(){
		this.setState((prevState)=>{
              result:prevState.result.sort((buss1, buss2)=>{
              	 if(buss1.rating === buss2.rating) {
					   
					    return buss2.rating - buss1.rating;
					  } else {
					
					    return buss2.rating - buss1.rating ;
					  }
               })
              .map((yelpData)=> {
                  return ({
                      id: yelpData.id,
                      name: yelpData.name,
                      image_url: yelpData.image_url,
                      is_closed: yelpData.is_closed,
                      rating: yelpData.rating,
                      city: yelpData.city,
                      url: yelpData.url,
                      address: yelpData.address,
                      phone: yelpData.phone
                  })
              })

             })
	}

    getApiData(){
        getYelpData(this.props.match.params.query).then(
          dataSearchYelp => {
            this.setState({
              result:[...dataSearchYelp]
              	.map(function(yelpData){
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
    componentWillReceiveProps( nextProps ) {
        this.props=nextProps
        this.getApiData()
    
    }
    componentDidMount(){
        this.getApiData()
    }
    render() {
        //console.log("filters", this.state)
        return ( 
            <div>
             <Header/>
                <div className="container"> 
                    <button type="button"  onClick={this.getFilter} className="btn btn-outline-warning" > Mostrar solo locales abiertos </button>
                </div>
                <Results inputresults={this.state.result}/>
                <Footer/>
            </div>
        )
    }
}
export default Filters;