import { makeRequest } from "./makeRequest"

export function login({ email, password }) {
    return makeRequest(`auth/authenticate`, {
        method: "POST",
        data: {
            email: email,
            password: password
        },
    })
}

export function register({firstName, lastName, email, password }) {
    return makeRequest(`auth/register`, {
        method: "POST",      
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        },
    })
}

export function logout(){
    return makeRequest(`Account/logout`, {
        method: "POST",
    })
}