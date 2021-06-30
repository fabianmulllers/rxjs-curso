import { from, of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map, pluck } from 'rxjs/operators'


const url = 'https://api.github.com/users?per_page=5'

const manejaErrores = ( response: Response) => {

    if( !response.ok){
        throw new Error( response.statusText )
    }

    return response
}


const atrapaError = (err: AjaxError) => {
    console.warn('error en :', err.message)
    return of({})
}

const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data) )
//     .catch( error => console.warn( 'error en usuarios', error ))

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data) )
//     .catch( error => console.warn( 'error en usuarios', error ))

ajax( url ).pipe(
    pluck( 'response' ),
    // catchError( err => {
    //     console.warn('error en :', err)
    //     return of({})
    // })
    catchError( atrapaError )
    // map( resp => resp.response )
).subscribe( users => console.log('usuarios :', users ) )