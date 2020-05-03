import React, { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';
import styled from 'styled-components';
import MapSoundPoint from '../sound-point/MapSoundPoint';
import getSoundPointData from '../../utils/get-sound-points-data';
import { mapAndSoundsLoaded, setPoint as setPointAction } from '../../actions';
import { connect } from 'react-redux';
import DataView from '../data-view/DataView';

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

const mdtp = (dispatch) => ({
  loaded: () => dispatch(mapAndSoundsLoaded()),
  setPoint: (e) => dispatch(setPointAction(e.lngLat)),
});

export default connect(
  null,
  mdtp
)(({ loaded, setPoint }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 4,
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
        points.forEach((sp) => sp.sound.play());
        setSoundPoints(points);
        // dispatch action to say app has loaded
        loaded();
      });
    }
  }, []);

  const dataViewProps = soundPoints.reduce(
    (acc, point) => ({
      ...acc,
      [point.key]: point.sound,
    }),
    {}
  );
  console.log('soundPoints: ', soundPoints);
  console.log('dataViewProps: ', dataViewProps);

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
        onViewportChange={setViewport}
        onMouseMove={setPoint}
      >
        {soundPoints.map((data) => (
          <MapSoundPoint {...data} />
        ))}

        <DataView soundPoints={dataViewProps} />
      </MapGL>
    </Filter>
  );
});
