import { fromEvent, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { setPoint } from '../actions';
import { ofType } from 'redux-observable';

let mapContainer;
const setMapContainer = () =>
  (mapContainer = document.querySelector('.mapboxgl-map'));

export const catchPoint = () =>
  fromEvent(document, 'mousemove').pipe(
    map(({ clientX, clientY }) => setPoint({ x: clientX, y: clientY }))
  );

export const mouseMoveListener = (action$) =>
  action$.pipe(
    ofType('MAP_AND_SOUNDS_LOADED'),
    tap(setMapContainer),
    tap(() => console.log(mapContainer)),
    switchMap(() =>
      fromEvent(mapContainer, 'mouseup').pipe(tap(() => console.log('hello!')))
    )
  );
