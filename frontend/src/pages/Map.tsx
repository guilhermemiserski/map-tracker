import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography } from '@mui/material';
import L from 'leaflet';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import 'leaflet/dist/leaflet.css';

const carIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23dc004e'><path d='M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z'/><circle cx='7.5' cy='14.5' r='1.5'/><circle cx='16.5' cy='14.5' r='1.5'/></svg>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map: React.FC = () => {
  const defaultPosition = [-23.5505, -46.6333];

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[defaultPosition[0], defaultPosition[1]]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[defaultPosition[0], defaultPosition[1]]} icon={carIcon}>
          <Popup>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DirectionsCarIcon color="secondary" />
              <Typography variant="body1">
                Veículo em movimento
              </Typography>
            </Box>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map; 