import React, {Component} from 'react'
import './showMaps.css'

class ShowMaps extends Component {
	render() {
		return (<div>
			<p>Google Maps</p>
		</div>)
	}
}

export default ShowMaps



// 			<html>
//   <head>

//   </head>
//   <body>
//     <h3>My Google Maps Demo</h3>
//     <div id="map"></div>
//     {
//       function initMap() {
//         var uluru = {lat: 41.3789978027344, lng: 2.18771433830261};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 15,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }
//     }
//     <script async defer
//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlxR6HdRdBNeXImyEAn3VkSWZFiOooESk&callback=initMap">
//     </script>
//   </body>
// </html>