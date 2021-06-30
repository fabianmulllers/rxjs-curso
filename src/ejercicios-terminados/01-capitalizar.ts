/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from, observable, of } from "rxjs";

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 (() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //   console.log( capitalizar(nombre) )
    // }
  
    // con el observable from
    from(nombres).subscribe( villano => console.log( capitalizar( villano ) ) ) 

    // from(nombres).subscribe( {
    //     next: val => console.log( 'next :', val )
    // }) 


    // con el observable of
    const villanos = of('batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa')
    villanos.subscribe( villano => console.log( capitalizar( villano ) ))
  

  
  
  })();
  
  