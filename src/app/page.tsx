'use client'

import Image from 'next/image'
import { MapContainer, TileLayer, useMap, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Icon } from "leaflet";

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import storeData from './store.json';
import dainamicData from './dainamic1986.json';
import newdainamicData from './newdainamic.json';
import daiclicData from './daiclic.json';
import newdaiclicData from './newdaiclic.json';
import clubData from './club.json';

function App() {
  return (
    <MapContainer center={[49.679957, 4.5177648]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">

/// Add Marker for Store
        <LayersControl.Overlay checked name="Store selling DAI">
          <LayerGroup>
            {storeData.map((e) => {
              if (e.lat !==  null  && e.lng !== null) {
                return (
                  <Marker position={[e.lat, e.lng]} >
                    <Popup>
                      {e.club}
                    </Popup>
                  </Marker>
                );
              } else {
              }
            })}
          </LayerGroup>
        </LayersControl.Overlay>

/// Add Marker for DAInamic 1986
<LayersControl.Overlay checked name="DAInamic reader in 1986">
  <LayerGroup>
  {dainamicData.map((e) => {
    if (e.lat !==  null  && e.lng !== null) {
      return (
        <Marker position={[e.lat, e.lng]} >
          <Popup>
            {e.club}
          </Popup>
        </Marker>
      );
    } else {
    }
  })}
  </LayerGroup>
</LayersControl.Overlay>

/// Add Marker for DAIclic
<LayersControl.Overlay checked name="DAIclic reader">
  <LayerGroup>
  {daiclicData.map((e) => {
    if (e.lat !==  null  && e.lng !== null) {
      return (
        <Marker position={[e.lat, e.lng]} >
          <Popup>
            {e.club}
          </Popup>
        </Marker>
      );
    } else {
    }
  })}
  </LayerGroup>
</LayersControl.Overlay>

/// Add Marker for newDAIclic
<LayersControl.Overlay checked name="DAIclic Reader in 1986">
  <LayerGroup>
  {newdaiclicData.map((e) => {
    if (e.lat !==  null  && e.lng !== null) {
      return (
        <Marker position={[e.lat, e.lng]} >
          <Popup>
            {e.club}
          </Popup>
        </Marker>
      );
    } else {
    }
  })}
  </LayerGroup>
</LayersControl.Overlay>

/// Add Marker for Club
<LayersControl.Overlay checked name="Recorded club meeting place">
  <LayerGroup>
  {clubData.map((e) => {
    if (e.lat !==  null  && e.lng !== null) {
      return (
        <Marker position={[e.lat, e.lng]} >
          <Popup>
            {e.club}
          </Popup>
        </Marker>
      );
    } else {
    }
  })}
  </LayerGroup>
</LayersControl.Overlay>

/// Add Marker for NewDainamic
<LayersControl.Overlay checked name="DAInamic Reader">
  <LayerGroup>
  {newdainamicData.map((e) => {
    if (e.lat !==  null  && e.lng !== null) {
      return (
        <Marker position={[e.lat, e.lng]} >
          <Popup>
            {e.club}
          </Popup>
        </Marker>
      );
    } else {
    }
  })}
  </LayerGroup>
</LayersControl.Overlay>

/// Add Marker for ...

  </LayersControl>
</MapContainer>

  );
}
export default App;
