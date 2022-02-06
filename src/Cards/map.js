import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./cards.css";
import { FaDailymotion } from "react-icons/fa";
import { BsQuestionSquare } from "react-icons/bs";
import avatar from "../images/no-lockdown.png";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFja3QxMjMiLCJhIjoiY2t5N3J3ZmpzMHJ0eDMxcW1veXIyOGphOSJ9.sC3ZTl21XLZbKPlvBPulJg";
  
  const Map = () => {
    const mapContainerRef = useRef(null);
    
    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(11.9);
    
    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/jackt123/cky7rzzh22c5515o1efhgnt85",
        // style: "mapbox://styles/jackt123/",
        center: [-93.264, 44.981],
        zoom: "10",
        maxZoom: 16,
        minZoom: 1,
        interactive: false,
      });
        



      function darkmode() {
        map.setStyle("mapbox://styles/jackt123/ckzan2oc0000g14kdl8mqftkh");
        console.log("darkmode");
      }

      


    map.scrollZoom.disable();

    const zoomLevel = [16, 14, 12, 10, 8, 6, 4];
    var i = 3;

    function zoomOut() {
      i = (i + 1) % zoomLevel.length;
      map.flyTo({ zoom: zoomLevel[i] });

      if (zoomLevel[i] >= 6) {
        return zoomOut;
      } else {
        document.getElementById("out").disabled = true;
      }
    }

    function zoomIn() {
      i = (i - 1) % zoomLevel.length;
      map.flyTo({ zoom: zoomLevel[i] });

      if (zoomLevel[i] <= 14) {
        return zoomIn;
      } else {
        document.getElementById("in").disabled = true;
      }
    }

    document.getElementById("out").addEventListener("click", () => {
      document.getElementById("in").disabled = false;
      zoomOut();
      darkmode();
    });

    document.getElementById("dm-toggle").addEventListener("click", () => {
      darkmode();
    });

    document.getElementById("in").addEventListener("click", () => {
      document.getElementById("out").disabled = false;

      zoomIn();
    });



    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="box mapbox">
      <div className="map-container" ref={mapContainerRef} />
      <button
        id="out"
        className="Map__ZoomButton-sc-12s41qg-4 eTWOUV"
        style={{ left: "20px", opacity: "1", transform: "none" }}
      >
        <svg
          id="plus-add.3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Path_13"
            data-name="Path 13"
            d="M0,0H24V24H0Z"
            fill="none"
          ></path>
          <path
            id="Path_15"
            data-name="Path 15"
            d="M16,12H8"
            fill="none"
            stroke="#0D1117"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
        </svg>
      </button>
      <button
        id="in"
        class="Map__ZoomButton-sc-12s41qg-4 eTWOUV"
        style={{ right: "20px", opacity: "1", transform: "none" }}
      >
        <svg
          id="plus-add.3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Path_13"
            data-name="Path 13"
            d="M0,0H24V24H0Z"
            fill="none"
          ></path>
          <path
            id="Path_14"
            data-name="Path 14"
            d="M12,8v8"
            fill="none"
            stroke="#0D1117"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
          <path
            id="Path_15"
            data-name="Path 15"
            d="M16,12H8"
            fill="none"
            stroke="#0D1117"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
        </svg>
      </button>
      <div style={{ transform: "none" }} className="map-avatar">
        <div className="avatar"><img src={avatar} alt="map avatar" /></div>
      </div>
    </div>
  );
};

export default Map;
