import { ajax } from 'rxjs/ajax'

// const url = 'https://api.github.com/users?per_page=5'
const url = 'https://httpbin.org/delay/1'



const obs$ = ajax.getJSON( url,{
    'Content-type': 'application/json',
    'mi-token': 'ABVC123'
} )

obs$.subscribe(
    data => console.log('data: ', data)
)





