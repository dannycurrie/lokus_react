import normalize from 'normalize-to-range';
import * as R from 'ramda';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getCurrentPoint } from '../../selectors';
import { calculateDistance, getVolume, initialiseAudio } from '../../utils';

function SoundPoint({ x, y, soundId, point }) {
  const [isPlaying, play] = useState(false);
  const [audio, setAudio] = useState(null);

  const distanceToPoint = calculateDistance({ x, y }, point);
  const volume = getVolume(distanceToPoint);

  useEffect(() => {
    const initAudio = async () => {
      initialiseAudio(soundId, setAudio);
      play(true);
    };
    if (!isPlaying) {
      initAudio();
    } else {
      if (audio) {
        audio.setVolume(volume);
      }
    }
  }, [audio, isPlaying, soundId, volume]);

  return <circle cx={x} cy={y} r={volume} fill="red" strokeWidth="5" />;
}

const mstp = state => ({
  point: getCurrentPoint(state)
});

export default connect(mstp, null)(SoundPoint);
