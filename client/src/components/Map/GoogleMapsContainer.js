// import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// import GoogleMap from '../SimpleMaps';

// let styles = {
//     mapContainer: {
//         width: "50%",
//         height: "auto",
//     }
// }

// export class MapContainer extends Component {
//     state = {
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {},
//         setSelectedPlace: {}
//     };

//     onMarkerClick = (props, marker, e) =>
//         this.setState({
//             selectedPlace: null,
//             setSelectedPlace: null,
//             activeMarker: marker,
//             showingInfoWindow: true
//         });

//     onClose = props => {
//         if (this.state.showingInfoWindow) {
//             this.setState({
//                 showingInfoWindow: false,
//                 activeMarker: null
//             });
//         }
//     };

//     render() {
//         return (
//             <div style={styles.mapContainer}>
//                 <GoogleMap>
//                     <Marker onClick={this.onMarkerClick} name={"venue"} />
//                     <InfoWindow
//                         marker={this.state.activeMarker}
//                         visible={this.state.showingInfoWindow}
//                         onClose={this.onClose}
//                     >
//                         <div>
//                             <h4>{this.state.selectedPlace.name}</h4>
//                         </div>
//                     </InfoWindow>
//                 </GoogleMap>
//             </div>
//         );
//     }
// }


// export default GoogleApiWrapper({
//     apiKey: "AIzaSyBMD3ojp-P28ggup4xeFUZI9i6rYDJwRNU"
// })(MapContainer)