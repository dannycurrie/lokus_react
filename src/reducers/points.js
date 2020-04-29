import { SET_POINT } from '../actions';

const initialState = {
  lat: 0,
  long: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POINT:
      const [long, lat] = action.payload;
      return { lat, long };
    default:
      return state;
  }
};
