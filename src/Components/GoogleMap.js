import { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";
import mapStyle from "../Components/Helpers/MapStyle.js";

 class MapContainer extends Component {
    render() {
        return (
            <Map 
            google={this.props.google}
            options={{style: mapStyle.blueStyle}}
            style ={{width:"50%" , height:"50%"}}
            zoom = {8}
            initialCenter = {
                {
                    lat: 43.38617,
                    lng: 17.58424,
                }
            }
            >
                <Marker 
                title = {"This is my location"}
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