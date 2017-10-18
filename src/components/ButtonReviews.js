import React, { Component } from 'react'

const ButtonReviews = () => (
  <button type="button" className="btn btn-default btn-lg btn-block">Yelper</button>
)
export default ButtonReviews

















// import React, { Component } from 'react'
// import Reviews from './Reviews'
// import {getYelpDataById } from '../services/Api.js'
// import Header from './Navbar'

// class  ShowSpecificResults extends Component {
//   constructor () {
//     super()
//     this.state = {
//       result: [{
//         rating: '',
//         text: '',
//         time_created: '',
//         url: '',
//         image_url: '',
//         name: ''
//       }]
//     }
//   }
//   getApiData () {
//     getYelpDataById(this.props.match.params['id']).then(
//       dataSearchYelp => {
//         console.log(this.props.match.params.id)
//         this.setState({
//           result: [...dataSearchYelp]
//             .map(function (yelpData) {
//               return ({
//                 rating: '',
//                 text: '',
//                 time_created: '',
//                 url: '',
//                 image_url: '',
//                 name: ''
//               })
//             })
//         })
//       }
//     )
//   }
//   componentWillReceiveProps (nextProps) {
//     this.props = nextProps
//     this.getApiData()
//   }
//   // componentDidMount=() => {
//   //   var idToSearch = this.props.match.params['id']
//   //   getYelpDataById(idToSearch).then((data)=>{
//   //     console.log(this.props.match.params.id)
//   //     this.setState({
//   //         result: [...getYelpDataById]
//   //           .map(function (yelpData) {
//   //             return ({
//   //               rating: '',
//   //               text: '',
//   //               time_created: '',
//   //               url: '',
//   //               image_url: '',
//   //               name: ''
//   //             })
//   //           })
//   //       })
//   //   })
//   // }
//   render () {
//     console.log(this.state)
//     return (
//       <div>
//         <Header />
//         <Reviews userReviews={this.state} />
//       </div>
//     )
//   }
// }

// export default ShowSpecificResults