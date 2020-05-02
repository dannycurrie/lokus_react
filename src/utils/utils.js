import * as R from 'ramda';
import maths from './maths';
import {
  RADIUS_OF_EARTH_KM,
  MAX_VOLUME,
  MIN_SIZE,
  MAX_SIZE,
} from '../constants';

const degreesToRadius = (deg) => {
  return deg * (Math.PI / 180);
};

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const dLat = degreesToRadius(lat2 - lat1);
  const dLon = degreesToRadius(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadius(lat1)) *
      Math.cos(degreesToRadius(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS_OF_EARTH_KM * c;
};

const normalise = (distance) =>
  ((RADIUS_OF_EARTH_KM - distance) / RADIUS_OF_EARTH_KM) * MAX_VOLUME;

/**
 * Given a distance value,
 * returns a corresponding volume value
 * within the volumne range defined by `MAX_VOLUME`
 *
 * The smaller the distance, the higher the volume.
 *
 * @see MAX_DISTANCE
 * @see MAX_VOLUME
 *
 * @param {number} value
 * @returns {number} volume
 */
export const getVolume = R.pipe(
  normalise,
  Math.abs,
  (value) => maths.zScores([0, value, MAX_VOLUME])[1]
);

export const getOpacity = (value) =>
  1 - maths.zScores([0, value, RADIUS_OF_EARTH_KM])[1];

const valueOrMin = (value) => Math.max(value, MIN_SIZE);
const valueOrMax = (value) => Math.min(value, MAX_SIZE);

export const getPointSize = R.pipe(normalise, Math.abs, valueOrMin, valueOrMax);
