// import React from 'react';

// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
// import SearchForm from "../components/Forms/SearchForm/SearchForm"


// const[
//   InfoWindow= false,
//   activeMarker={},
//   selectedPlace={}
// ]

// constMap = (props) => {
//   render(props) {
    
// return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 25.761681, lng: -80.191788 }}
    
//      >
//      {this.props.lat.map(venue => (
//         <Marker 
//         position={{
//           lat: venue,
//         }} 
        
  
//         />
//       ))}
        
        
  
//      </GoogleMap>
    
//   )
//       }  
//       onVenueClick = (marker) =>
//       this.setState({
//         selectedPlace: {},
//         activeMarker: marker,
//         showingInfoWindow: true
//       });

//   const WrappedMap = withScriptjs(withGoogleMap(Map));
      
// export default function GoogleMaps(props){
//   return (
//     <div style={{ width:"100vw", height:"100vh"}}>
//         <WrappedMap
//           googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMD3ojp-P28ggup4xeFUZI9i6rYDJwRNU"}
//           loadingElement={<div style={{ height: "100%" }} />}
//           containerElement={<div style={{ height: "100%" }} />}
//           mapElement={<div style={{ height: "100%" }} />}
//           />
//           <Marker onClick={this.onMarkerClick} name={"venue"} />
//            <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//             onClose={this.onClose}
//           >
//             <div>
//               <h4>{this.state.selectedPlace.name}</h4>
//             </div>
//           </InfoWindow>
//         </div>
      
//       );
//   }
// }

  

