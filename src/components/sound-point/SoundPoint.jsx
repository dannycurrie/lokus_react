import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getCurrentPoint } from '../../selectors';
import {
  calculateDistance,
  getVolume,
  initialiseAudio,
  getOpacity,
} from '../../utils';

const Point = styled.circle``;

function SoundPoint({ x, y, soundId, point }) {
  const [audio, setAudio] = useState(null);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    initialiseAudio(soundId, setAudio);
  }, [soundId]);

  const [volume, setVolume] = useState(0);
  useEffect(() => {
    if (audio) {
      const distanceToPoint = calculateDistance({ x, y }, point);
      setVolume(getVolume(distanceToPoint));
      setOpacity(getOpacity(distanceToPoint));
      audio.setVolume(volume);
    }
  }, [x, y, audio, point, volume]);

  return (
    <Point
      cx={x}
      cy={y}
      r={volume / 2}
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
