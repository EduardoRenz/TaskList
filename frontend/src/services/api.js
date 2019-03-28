/*
Define a url base do servidor da aplicação
*/
import axios from 'axios'
export default() =>{
    return axios.create({
        baseURL: 'http://localhost/tasklist/',
        headers: {
           'Access-Control-Allow-Origin': '*',
           'access-control-allow-headers': '*',
           'Access-Control-Request-Method':'*'
        }
    })
}