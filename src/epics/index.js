import { combineEpics } from 'redux-observable';
import { catchPoint } from './points';

export default combineEpics(catchPoint);
