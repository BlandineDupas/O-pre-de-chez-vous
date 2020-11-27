import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';

// STYLES
import './styles.scss';

const Carte = ({ geometries, itinerary }) => {
  let zoom = 5;
  let center = [46.8, 1];

  useEffect(() => {
    if (geometries.length === 1) {
      zoom = 8;
      // console.log(geometries[0].lat)
      center = [geometries[0].lat, geometries[0].lng];
    }

    if (geometries.length > 1) {
      zoom = 5;
      center = [46.8, 0.1];
    }
    // console.log(zoom)
  }, [geometries]);

  let positions;
  if (itinerary) {
    positions = geometries.map((geometry) => [geometry.lat, geometry.lng]);
    // console.log(positions);
  }
  return (
    <Map
      center={center}
      zoom={zoom}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geometries.map((geometry) => (
        <Marker key={`${geometry.lat}${geometry.lng}`} position={[geometry.lat, geometry.lng]}>
          {geometry.name && (
            {/* <Popup>
            TODO
            </Popup> */}
          )}
        </Marker>
      ))}
      {itinerary && <Polyline positions={positions} />}
    </Map>
  );
};
Carte.propTypes = {
  geometries: PropTypes.any,
};

Carte.defaultProps = {
  geometries: null,
};

export default Carte;
