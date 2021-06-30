import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";



const number = [1,2,3,4,5,6];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;

}

const total = number.reduce( totalReducer, 0)

console.log('total arr', total);


interval(500).pipe(
    take(6),
    tap(console.log),
    reduce( totalReducer )
)
.subscribe({
    next: val => console.log('valor: ',val),
    complete: () => console.log('completado')
})