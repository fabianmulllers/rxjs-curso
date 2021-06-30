import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";



const numeros$ = of(1,2,3,4)
const intervalos$ = interval(1000).pipe( take(3) )
const letras$ = of('a','b','c').pipe( delay(3500))


// forkJoin(
//     numeros$,
//     intervalos$,
//     letras$
// ).subscribe(console.log)


// forkJoin(
//     numeros$,
//     intervalos$,
//     letras$
// ).subscribe( resp => {
//     console.log( 'numeros', resp[0] )
//     console.log( 'intervalo', resp[1] )
//     console.log( 'letras', resp[2] )
// })


forkJoin({
    num: numeros$,
    int: intervalos$,
    let: letras$
}).subscribe( resp => {console.log(resp) } )

