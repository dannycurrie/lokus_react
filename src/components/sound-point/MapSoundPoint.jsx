import styled from 'styled-components';
import { connect } from 'react-redux';
import React from 'react';
import { getCurrentPoint } from '../../selectors';
import { Marker } from 'react-map-gl';
import useSound from './use-sound';

const Point = styled.circle``;

function SoundPoint({ lat, long, sound, point }) {
  const { opacity, pointSize } = useSound({ lat, long, point, sound });

  return (
    <Marker key={`marker-${sound.src}`} longitude={long} latitude={lat}>
      <svg width={100} height={100}>
        <Point
          r={pointSize}
          opacity={opacity}
          fill="#87cfb0"
          strokeWidth="5"
          cx={50}
          cy={50}
        />
      </svg>
    </Marker>
  );
}

const mstp = (state) => ({
  point: getCurrentPoint(state),
});

export default connect(mstp, null)(SoundPoint);
