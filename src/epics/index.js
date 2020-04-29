import { combineEpics } from 'redux-observable';
import { catchPoint, mouseMoveListener } from './points';

export default combineEpics(catchPoint, mouseMoveListener);
