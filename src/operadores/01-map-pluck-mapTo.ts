import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


// range(1,5).pipe(
//     map<number,number>( valor => valor * 10)
// )
// .subscribe(console.log)


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(
    map( event => event.code)
)

const keyupPluck$ = keyUp$.pipe(
    pluck('target','baseURI')
);

const keyupMapto$ = keyUp$.pipe(
    mapTo('tecla presionada')
);


keyUp$.subscribe(console.log)
keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( code => console.log('pluck', code));
keyupMapto$.subscribe( code => console.log('mapTo', code));
