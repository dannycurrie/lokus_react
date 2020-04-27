import React, { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';
import styled from 'styled-components';
import MapSoundPoint from '../sound-point/MapSoundPoint';
import getSoundPointData from '../../utils/get-sound-points-data';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZGFubnljdXJyaWUiLCJhIjoiY2lscWxvMHNpMDA1bHY4bHVzNXdxd2M4YSJ9.vllLON-eJpIoQ20uN18fTg';

const Filter = styled.div`
  width: 100vw;
  height: 100vh;
  animation: blur 6s ease infinite;
  opacity: 0.5;
  @keyframes blur {
    0%,
    100% {
      -webkit-filter: blur(0.2px);
    }
    50% {
      -webkit-filter: blur(1px);
    }
  }
`;

export default () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 14,
  });
  const [soundPoints, setSoundPoints] = useState([]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) => {
        setViewport((prev) => ({
          ...prev,
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
        }));
        const points = getSoundPointData();
        console.log('points: ', points);
        points.forEach((sp) => sp.sound.play());
        setSoundPoints(points);
      });
    }
  }, []);

  return (
    <Filter>
      <MapGL
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/dannycurrie/ck8yw4n3j02mp1int452wx2qz"
        {...viewport}
        dragPan={true}
        dragRotate={true}
        scrollZoom={true}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {soundPoints.map((data) => (
          <MapSoundPoint {...data} />
        ))}
      </MapGL>
    </Filter>
  );
};
