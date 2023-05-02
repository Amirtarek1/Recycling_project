
interface authstate {
    loading : boolean 
    name : any
    accessToken:any
}



export const initialState : authstate = {

    loading : false ,
    name : "amir",
    accessToken:'aaaaaaaaa'
}