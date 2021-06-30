import { reduce, scan, map } from 'rxjs/operators';
import { from } from 'rxjs';


const numeros = [1,2,3,4,5];

// const totalAcumulador =  (acc, cur) => {
//     return acc = cur;
// }


const totalAcumulador =  (acc, cur) => acc + cur;


// reduce

from(numeros)
.pipe(
    reduce(totalAcumulador)
)
.subscribe(console.log)

// scan
from(numeros)
.pipe(
    scan(totalAcumulador)
)
.subscribe(console.log)


//redux
interface usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: usuario[] = [
    { id: ' fmuller', autenticado: false, token: null },
    { id: ' fmuller', autenticado: true, token: 'ABC' },
    { id: ' fmuller', autenticado: true, token: "ABC123" }
]

const state$ = from( user ).pipe(
    scan<usuario>( (acc, cur) => {
        return {...acc, ...cur}
    },{edad: 33})
);

const id$ = state$.pipe(
    map( state => state.id)
)

id$.subscribe(console.log)