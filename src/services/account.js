import { makeRequest } from "./makeRequest"

export function login({ username, pswd }) {
    return makeRequest(`auth/authenticate`, {
        method: "POST",
        data: {
            username: username,
            pswd: pswd
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