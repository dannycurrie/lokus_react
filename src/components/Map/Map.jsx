import React from 'react';
import MapGL from 'react-map-gl';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZGFubnljdXJyaWUiLCJhIjoiY2lscWxvMHNpMDA1bHY4bHVzNXdxd2M4YSJ9.vllLON-eJpIoQ20uN18fTg';

const Filter = styled.div`
  width: 100vw;
  height: 100vh;
  animation: blur 6s ease infinite;
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
  useEffect(() => {
    if (navigator.geolocation) {
      console.log('helo');
      navigator.geolocation.getCurrentPosition((res) =>
        setViewport((prev) => ({
          ...prev,
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
        }))
      );
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
      />
    </Filter>
  );
};
