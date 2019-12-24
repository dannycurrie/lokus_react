import { connect } from 'react-redux';
import React from 'react';
import { getCurrentPoint } from '../../selectors';
import { calculateDistance, getVolume } from '../../utils';

function SoundPoint({ x, y, point }) {
  const distanceToPoint = calculateDistance({ x, y }, point);
  return (
    <circle
      cx={x}
      cy={y}
      r={getVolume(distanceToPoint)}
      fill="red"
      strokeWidth="5"
    />
  );
}

const mstp = state => ({
  point: getCurrentPoint(state)
});

export default connect(mstp, null)(SoundPoint);
