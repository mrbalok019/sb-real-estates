import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import osm from '../../provaider/osm';

// MapPlaceholder component
function MapPlaceholder() {
  return (
    <p>
      Map of New York Manhattan.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}

// MapWithPlaceholder component
function MapWithPlaceholder() {
  return (
    <MapContainer center={[40.7831, -73.9712]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapPlaceholder />
    </MapContainer>
  );
}

// BasicMap component
const BasicMap = () => {
    return (
      <div className="playgroundPriview_wiye">
        <div className="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
          <MapContainer
            center={[40.73061, -73.935242]} // New York, Manhattan
            zoom={12}
            style={{ width: '100%', height: '100%' }}>
            <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
          </MapContainer>
        </div>
      </div>
    );
  };

export default BasicMap;
