import * as R from 'ramda';
import maths from './maths';
import { MAX_DISTANCE, MAX_VOLUME } from '../constants';

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const normalise = (distance) =>
  ((MAX_DISTANCE - distance) / MAX_DISTANCE) * MAX_VOLUME;

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
  1 - maths.zScores([0, value, MAX_DISTANCE])[1];

export const getPointSize = R.pipe(normalise, Math.abs);
