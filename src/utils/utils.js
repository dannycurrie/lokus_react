import * as R from 'ramda';
import maths from './maths';
import { MAX_DISTANCE, MAX_VOLUME } from '../constants';

/**
 * Caclulates the distance between 2 points: A and B
 *
 * @param {x: number, y: number} pointA
 * @param {x: number, y: number} pointB
 * @returns number
 */
export const calculateDistance = (pointA, pointB) => {
  const a = pointA.x - pointB.x;
  const b = pointA.y - pointB.y;
  return Math.sqrt(a * a + b * b);
};

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
  (distance) => ((MAX_DISTANCE - distance) / MAX_DISTANCE) * MAX_VOLUME,
  Math.abs
);

export const getOpacity = (value) =>
  1 - maths.zScores([0, value, MAX_DISTANCE])[1];
