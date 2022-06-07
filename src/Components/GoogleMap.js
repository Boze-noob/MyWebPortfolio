import { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";
import mapStyle from "../Components/Data/MapStyle.js";

 class MapContainer extends Component {


    _mapLoaded(mapProps, map) {
        map.setOptions({
           styles: mapStyle.blueStyle
        })
     }

    render() {
        return (
            <Map 
            google={this.props.google}
            style ={{width:"90%" , height:"70%"}}
            zoom = {15}
            onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
            initialCenter = {
                {
                    lat: 43.38617,
                    lng: 17.58424,
                }
            }
            >
                <Marker 
                title = {"My current location. Come to coffee if you are near by!"}
                name = {"My location"}
                position={{lat: 43.38617, lng: 17.58424}}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB93zWUkrkQdETMfZQDoYVvN8jyOlKmYZk"})(
    MapContainer
)