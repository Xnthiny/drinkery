import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../SimpleMaps';

let styles = {
  mapContainer: {
    width: "50%",
    height: "auto",
  }
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div style={styles.mapContainer}>
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={'current location'} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBMD3ojp-P28ggup4xeFUZI9i6rYDJwRNU"
})(MapContainer)