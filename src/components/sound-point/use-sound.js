import { useEffect } from 'react';
import {
  calculateDistance,
  getVolume,
  getOpacity,
  getPointSize,
} from '../../utils';
import { useState } from 'react';

export default ({ lat, long, point, sound }) => {
  const [opacity, setOpacity] = useState(1);
  const [pointSize, setPointSize] = useState(0);

  useEffect(() => {
    if (point) {
      const distanceToPoint = calculateDistance(
        lat,
        long,
        point.lat,
        point.long
      );
      setOpacity(getOpacity(distanceToPoint));
      setPointSize(getPointSize(distanceToPoint));
      sound.volume(getVolume(distanceToPoint));
    }
  }, [lat, long, point, sound]);

  return {
    opacity,
    pointSize,
  };
};
