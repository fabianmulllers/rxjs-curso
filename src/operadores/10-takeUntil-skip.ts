import { interval, fromEvent } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';



const boton = document.createElement('button')
boton.innerHTML =' detener timer'

document.querySelector('body').append(boton)

const counter$ = interval(1000)

// const click$ = fromEvent(boton, 'click')
const click$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap despues del skip'))
)


counter$.pipe(
    takeUntil(click$)
).subscribe({
    next: val => console.log('next :', val),
    complete: () => console.log('completado')
})