import React, {Component} from 'react'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ShowMaps = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);


export default ShowMaps;

// <ShowMaps
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />