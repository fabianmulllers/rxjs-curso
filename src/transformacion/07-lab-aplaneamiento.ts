

// creando un formulario

import { fromEvent, of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError, concatMap, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators"


//helper
const peticionHttpLogin = ( userPassword ) =>  ajax.post('https://reqres.in/api/login?delay=1', userPassword )
    .pipe( 
        pluck( 'response', 'token'),
        catchError( err => of('xxx'))
    );




const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')


// Configuraciones
inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'


submitBtn.innerHTML = 'Ingresar'

form.append( inputEmail, inputPass, submitBtn)

document.querySelector('body').append(form)


// streams

const submitForm$ = fromEvent<Event>( form ,'submit').pipe(
    tap( event => event.preventDefault() ),
    map( event => ({
        email : event.target[0].value,
        password: event.target[1].value
    })),
    // mergeMap( peticionHttpLogin ) // ejecuta todas los observables 
    // switchMap( peticionHttpLogin ) // solo mantiene el ultimo observable activo y cancela los demas observables
    // concatMap( peticionHttpLogin ) // ejecuta todos los observables consecutivamente generando una cola
    exhaustMap( peticionHttpLogin ) // ejecuta solo 1 observable y los demas los ignora, una vez finalizado el observable active puede subscribirse a otro

)

submitForm$.subscribe( token => {
    console.log( token );
})




