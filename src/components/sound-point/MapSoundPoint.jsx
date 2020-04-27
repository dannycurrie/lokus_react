import styled from 'styled-components';
import { connect } from 'react-redux';
import React from 'react';
import { getCurrentPoint } from '../../selectors';
import { Marker } from 'react-map-gl';

const Point = styled.circle``;

function SoundPoint({ lat, long, sound, mousePoint }) {
  return (
    <Marker key={`marker-${sound.src}`} longitude={long} latitude={lat}>
      <svg>
        <Point
          r={10}
          opacity={1}
          fill="#87cfb0"
          strokeWidth="5"
          x={20}
          y={20}
        />
      </svg>
    </Marker>
  );
}

const mstp = (state) => ({
  mousePoint: getCurrentPoint(state),
});

export default connect(mstp, null)(SoundPoint);
