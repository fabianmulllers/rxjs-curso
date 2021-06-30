import { fromEvent } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    // tap(console.log),
    map( ({ x, y }) => ({x,y}) ),
    takeWhile( ({ y }) => y <= 150 , true)
)
.subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete')
});