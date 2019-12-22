import { SET_POINT } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POINT:
      console.log('HELLO!');
      return { ...action.payload };
    default:
      return state;
  }
};
