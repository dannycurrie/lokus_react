import { fromEvent } from 'rxjs';
import { map, tap, withLatestFrom, ignoreElements } from 'rxjs/operators';
import { setPoint, SET_POINT } from '../actions';
import { ofType } from 'redux-observable';

export const catchPoint = () =>
  fromEvent(document, 'mousemove').pipe(
    map(({ clientX, clientY }) => setPoint({ x: clientX, y: clientY }))
  );

export const testPoint = (action$, state$) =>
  action$.pipe(
    ofType(SET_POINT),
    withLatestFrom(state$),
    tap(([a, s]) => console.log(a, s)),
    ignoreElements()
  );
