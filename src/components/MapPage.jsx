import React from 'react';
import Navbar from './Navbar';
import mapImage from '../assets/custom_map.png';

const markers = [
  {
    id: 1,
    name: 'Recycling Center 1',
    top: '38%',
    left: '30.5%',
    googleMapsUrl: 'https://www.google.com/maps/place/University+of+San+Carlos/-Talamban+Campus'
  },
  {
    id: 2,
    name: 'Recycling Center 2',
    top: '47%',
    left: '52%',
    googleMapsUrl: 'https://www.google.com/maps/place/Pacific+Mall'
  },
  {
    id: 3,
    name: 'Recycling Center 3',
    top: '16%',
    left: '63%',
    googleMapsUrl: 'https://www.google.com/maps/place/SM+City+Consolacion'
  },
];

const MapPage = () => {
  return (
    <div>
      <Navbar showUserMenu={true} userName="Jane" />
      <main style={{ padding: '40px 8%', textAlign: 'center' }}>
        <h1>Find a Recycling Location</h1>
        <p>Click on a marker to open the location in Google Maps.</p>
        <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
          <img
            src={mapImage}
            alt="Custom Map"
            style={{ width: '100%', height: 'auto' }}
          />
          {markers.map(marker => (
            <button
              key={marker.id}
              style={{
                position: 'absolute',
                top: marker.top,
                left: marker.left,
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--primary-green)',
                border: '2px solid #fff',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              title={marker.name}
              onClick={() => window.open(marker.googleMapsUrl, '_blank')}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MapPage;
