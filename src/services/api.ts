import axios from 'axios'
import { getTokenLocalStorage } from '../context/AuthProvider/utils'

export const Api = axios.create ({
    baseURL: 'http://localhost:3000/'
})

Api.interceptors.request.use (
    (config) => {
        const token = getTokenLocalStorage()
        config.headers.Authorization = `Token ${token?.token}`
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)