import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.18.63:8080/'
})

export default api