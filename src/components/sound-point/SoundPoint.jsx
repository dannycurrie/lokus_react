import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getCurrentPoint } from '../../selectors';
import {
  calculateDistance,
  getVolume,
  initialiseAudio,
  getOpacity,
  getPointSize,
} from '../../utils';

const Point = styled.circle``;

function SoundPoint({ x, y, soundId, point }) {
  const [audio, setAudio] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [pointSize, setPointSize] = useState(0);
  useEffect(() => {
    setAudio(initialiseAudio(soundId));
  }, []);

  useEffect(() => {
    const distanceToPoint = calculateDistance({ x, y }, point);
    setOpacity(getOpacity(distanceToPoint));
    setPointSize(getPointSize(distanceToPoint));
    if (audio) {
      audio.volume(getVolume(distanceToPoint));
    }
  }, [x, y, point]);

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
