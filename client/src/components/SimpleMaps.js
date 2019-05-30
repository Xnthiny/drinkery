import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.761681,
      lng: -80.191788
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '131.9vh', alignContent: 'center', border: '10px solid #909090'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBMD3ojp-P28ggup4xeFUZI9i6rYDJwRNU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={25.761681}
            lng={-80.191788}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;