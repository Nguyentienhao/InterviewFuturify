import React from 'react';
import './styles.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
    return (
        <div className="search-map search-map">
            <div className="map-container">
                <div className="group-btn-map">
                    <a href="#" className="close-map-zoning clear-draw-mode">
                        <span>{"Xoá khoanh vùng"}</span>
                        <i className="zmdi zmdi-close" />
                    </a>
                    <a href="#" className="map-zoning">
                        <i className="zmdi zmdi-tab-unselected" />
                        {"Khoanh vùng"}
                    </a>
                </div>
                <div style={{overflow: 'hidden'}} className="map-render">
                    <Map
                        google={props.google}
                        initialCenter={{
                            lat: -1.2884,
                            lng: 36.8233,
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCx3c8GVP57CDXvA8l1iCNRlMFrXdj7G_0'
})(MapContainer);