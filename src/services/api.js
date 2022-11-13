import axios from "axios";

const api = axios.create({
    // baseURL: 'http://192.168.18.63:8080/'
    baseURL: 'https://ecomm-backend-rafael.herokuapp.com/'
})

export default api