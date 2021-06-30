import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`siguienge [next]: ${ value}`),
    error : error => console.warn(`error [obs] : ${ error}`),
    complete: () => console.info('completado [obs]')
}

const intervalos$ = new Observable<number>(subscriber => {

    // Crear un contador 1 2 3 4 5 6 7 .... 
    let num = 0;
    const interval = setInterval(() => {
        subscriber.next( num );
        num++;
        console.log( num );
    },1000);

    setTimeout( () => {
        subscriber.complete();
    },2500)

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});


// const subs1 = intervalos$.subscribe( num => console.log(`num ${ num }`));
// const subs2 = intervalos$.subscribe( num => console.log(`num ${ num }`));
// const subs3 = intervalos$.subscribe( num => console.log(`num ${ num }`));

const subs1 = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer );
const subs3 = intervalos$.subscribe( observer );

subs1.add( subs2 )
     .add( subs3 )

setTimeout( ()  => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('completado timeout');
},6000);