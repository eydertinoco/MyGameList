import axios from 'axios';

export const server = axios.create({
    baseURL: 'https://mygamelist-backend-production.up.railway.app/'
})