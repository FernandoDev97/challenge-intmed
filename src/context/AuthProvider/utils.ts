import { Api } from "../../services/api"
import { IUser } from "./types"

export function setTokenLocalStorage (user: IUser | null) {
    localStorage.setItem('token', JSON.stringify(user))
}

export function setUserLocalStorage (user: IUser | null) {
    localStorage.setItem('user_session', JSON.stringify(user))
}

export function getUserSessionLocalStorage () {
    const user = localStorage.getItem('user_session')
    if (!user) {
        return null;
    }
    const userJson = JSON.parse(user)
    return userJson ?? null;
}

export function getUserLocalStorage () {
    const user = localStorage.getItem('users')
    if (!user) {
        return null;
    }
    const userJson = JSON.parse(user)
    return userJson ?? null;
}

export async function LoginRequest (email: string, password: string) {
    try {
        const request = await Api.post('users/login', {username: email, password: password})
        return request.data
    } catch (error) {
        return null
    }
}