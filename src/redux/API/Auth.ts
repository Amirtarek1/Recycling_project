import api from "./api";


export const auth_apis = {
login : ( body : any )=> api.post('login' , { ...body})
}

