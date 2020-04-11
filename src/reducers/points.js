import { SET_POINT } from '../actions';

const initialState = {
  x: 0,
  y: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POINT:
      return { ...action.payload };
    default:
      return state;
  }
};
