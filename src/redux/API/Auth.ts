import api from "./api";


export const auth_apis = {
    login: (body: any) => api.post('auth', { ...body }),
    // sign_up : ()=>api.get('endpoint')
    Register: (body: any) => api.post('registration', { ...body })

}

