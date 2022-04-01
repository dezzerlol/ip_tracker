import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function ChangeView({ center, zoom }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
  }

const Map = ({center}) => {
  return (
    <div id='map' style={{ height: '74vh', position: 'relative', zIndex: 2 }}>
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100wh' }}>
      <ChangeView center={center} zoom={13}/>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={center}>
        <Popup>
          You <br /> {center.join(', ')}
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )
}

export default Map