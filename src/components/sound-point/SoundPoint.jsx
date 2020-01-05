import { connect } from 'react-redux';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getCurrentPoint } from '../../selectors';
import { calculateDistance, getVolume, initialiseAudio } from '../../utils';

function SoundPoint({ x, y, soundId, point }) {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    initialiseAudio(soundId, setAudio);
  }, [soundId]);

  const [volume, setVolume] = useState(0);
  useEffect(() => {
    if (audio) {
      const distanceToPoint = calculateDistance({ x, y }, point);
      setVolume(getVolume(distanceToPoint));
      audio.setVolume(volume);
    }
  }, [x, y, audio, point, volume]);

  return <circle cx={x} cy={y} r={volume} fill="red" strokeWidth="5" />;
}

const mstp = state => ({
  point: getCurrentPoint(state)
});

export default connect(mstp, null)(SoundPoint);
