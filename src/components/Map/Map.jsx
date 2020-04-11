import React, { useRef } from 'react';
import MapGL from 'react-map-gl';
import { useState } from 'react';
import { useEffect } from 'react';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZGFubnljdXJyaWUiLCJhIjoiY2lscWxvMHNpMDA1bHY4bHVzNXdxd2M4YSJ9.vllLON-eJpIoQ20uN18fTg';

export default () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15,
  });
  useEffect(() => {
    if (navigator.geolocation) {
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
    <MapGL
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/dannycurrie/ck8vnjky12hx21in074cs3d0f"
      {...viewport}
    />
  );
};
