import { combineEpics } from 'redux-observable';
import { catchPoint, testPoint } from './points';

export default combineEpics(catchPoint, testPoint);
