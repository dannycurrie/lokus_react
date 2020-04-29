export const SET_POINT = 'SET_POINT';

export const setPoint = (payload) => ({
  type: 'SET_POINT',
  payload,
});

export const mapAndSoundsLoaded = () => ({
  type: 'MAP_AND_SOUNDS_LOADED',
});
