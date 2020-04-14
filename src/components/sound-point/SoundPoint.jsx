import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getCurrentPoint } from '../../selectors';
import {
  calculateDistance,
  getVolume,
  getOpacity,
  getPointSize,
} from '../../utils';

const Point = styled.circle``;

function SoundPoint({ x, y, point, sound }) {
  const [opacity, setOpacity] = useState(1);
  const [pointSize, setPointSize] = useState(0);

  useEffect(() => {
    const distanceToPoint = calculateDistance({ x, y }, point);
    setOpacity(getOpacity(distanceToPoint));
    setPointSize(getPointSize(distanceToPoint));
    sound.volume(getVolume(distanceToPoint));
  }, [x, y, point, sound]);

  return (
    <Point
      cx={x}
      cy={y}
      r={pointSize}
      opacity={opacity}
      fill="#87cfb0"
      strokeWidth="5"
    />
  );
}

const mstp = (state) => ({
  point: getCurrentPoint(state),
});

export default connect(mstp, null)(SoundPoint);
