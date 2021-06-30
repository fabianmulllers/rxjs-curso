import { ajax } from 'rxjs/ajax'



const url = 'https://httpbin.org/delay/1'


ajax.put( url,{
    id:1,
    nombre:'fabian'
},{
    'mi-token' : 'ABVSC'
}).subscribe(console.log)


ajax({
    url: url,
    method:'DELETE',
    headers:{
        'mi-token' : 'asdasd'
    },
    body:{
        id:1,
        nombre:'Fabian'
    }
}).subscribe(console.log)