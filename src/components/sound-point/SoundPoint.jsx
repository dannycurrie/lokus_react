import { connect } from 'react-redux';
import React from 'react';
import { getCurrentPoint } from '../../selectors';

const calculateDistance = (pointA, pointB) => {
  console.log('pointA, pointB: ', pointA, pointB);
  return (pointA.x = pointB.x) + (pointA.y = pointB.y);
};

function SoundPoint({ x, y, point }) {
  const volume = calculateDistance({ x, y }, point);
  console.log('volume: ', volume);

  return (
    <circle cx={x} cy={y} r="20" stroke="red" fill="red" strokeWidth="5" />
  );
}

const mstp = state => ({
  point: getCurrentPoint(state)
});

export default connect(mstp, null)(SoundPoint);
