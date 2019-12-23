import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { setPoint } from '../actions';

export const catchPoint = () =>
  fromEvent(document, 'mousemove').pipe(
    map(({ clientX, clientY }) => setPoint({ x: clientX, y: clientY }))
  );
