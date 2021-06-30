import { from, of, range, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


interface Personaje {
    tipo: string,
    nombre: string,

}

// range(1,10).pipe(
//     filter( val => val % 2 === 1)
// ).subscribe(console.log);

range(20,30).pipe(
    filter( (val,i) => {
        console.log('index', i);
        return val % 2 === 1
    })
)/* .subscribe(console.log); */

const personajes = [
    {
        tipo: 'heroe',
        nombre: 'batman',
    },
    {
        tipo: 'heroe',
        nombre: 'robin',
    },
    {
        tipo: 'villano',
        nombre: 'joker',
    }
];


from<Personaje[]>(personajes).pipe(
    filter( ({tipo, nombre}) => tipo === 'heroe' )
).subscribe( console.log ) 


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ), // keyboardEvent, string
    filter( key => key === 'Enter' )
)

keyup$.subscribe( console.log ) 