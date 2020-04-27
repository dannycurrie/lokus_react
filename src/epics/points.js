import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { setPoint } from '../actions';

// TODO: https://docs.mapbox.com/mapbox-gl-js/example/mouse-position/
export const catchPoint = () =>
  fromEvent(document, 'mousemove').pipe(
    map(({ clientX, clientY }) => setPoint({ x: clientX, y: clientY }))
  );
