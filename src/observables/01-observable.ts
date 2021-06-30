import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`siguienge [next]: ${ value}`),
    error : error => console.warn(`error [obs] : ${ error}`),
    complete: () => console.info('completado [obs]')
}


// const obs$ = Observable.create(); es deprecated

const obs$ = new Observable<string>( subs => {

    subs.next('hola');
    subs.next('mundo');
    
    subs.next('hola');
    subs.next('mundo');

    // forzar un error
    // const a = undefined;
    // a.nombre = 'fabian';
    
    subs.complete();

    subs.next('hola');
    subs.next('mundo');


} );



// obs$.subscribe( resp => { console.log(resp) })
// obs$.subscribe( console.log );
    
    // obs$.subscribe( 

    //     valor => console.log(`next: ${ valor }`),
    //     error => console.warn(`error: ${ error }`),
    //     () => console.info(`completado`)

    // );

    obs$.subscribe( observer )
