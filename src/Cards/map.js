import React from "react";
import "./cards.css";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFja3QxMjMiLCJhIjoiY2t5N3J3ZmpzMHJ0eDMxcW1veXIyOGphOSJ9.sC3ZTl21XLZbKPlvBPulJg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/jackt123/cky7rzzh22c5515o1efhgnt85', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

function Map() {
    return(
        <div className="box">
            <div className="map-contents" id="map">
            </div>
        </div>
    )
}

export default Map;