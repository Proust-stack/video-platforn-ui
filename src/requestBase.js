import axios from 'axios'
export const axiosInstance  = axios.create({
    baseURL: 'https://video-app-node-server.herokuapp.com/api/'
})