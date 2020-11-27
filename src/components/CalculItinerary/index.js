import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


// STYLES
import './styles.scss';


function go() {
    map = L.map("map").setView([47, 2.424], 6);
    var lyrMaps = L.geoportalLayer.WMTS({
        layer: "GEOGRAPHICALGRIDSYSTEMS.MAPS",
    }, { // leafletParams
        opacity: 0.7
    });
    map.addLayer(lyrMaps) ;
    var routeCtrl = L.geoportalControl.Route({
    });
	map.addControl(routeCtrl);

}

Gp.Services.getConfig({
    apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
    onSuccess : go
}) ;

var infoDiv= document.getElementById("info") ;
infoDiv.innerHTML= "<p> Extension Leaflet version "+Gp.leafletExtVersion+" ("+Gp.leafletExtDate+")</p>" ;
