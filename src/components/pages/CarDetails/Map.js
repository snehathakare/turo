import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import {blue} from "@material-ui/core/colors";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };



  render() {
    console.log(this.props.data.title)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDDqsqjB6WrkHlUZgXBPCsHXXpZrBWfL1E" }}
          defaultCenter={this.props.data.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
              color="blue"
            lat={this.props.data.center.lat}
            lng={this.props.data.center.lng}
            name={this.props.data.title}
              text="afsdfa"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
