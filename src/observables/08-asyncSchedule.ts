import { asyncScheduler } from 'rxjs';



// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('hola mundo');
const saludar2 = (nombre) => console.log(`hola ${ nombre }`);

// asyncScheduler.schedule( saludar, 2000 )
// asyncScheduler.schedule( saludar2, 2000,'Fabian' )


const subs = asyncScheduler.schedule( function(state){

    console.log('state', state);

    this.schedule( state + 1, 1000)

},3000,0 )

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => { subs.unsubscribe(); console.log('termino de scheduel');} , 6000)
