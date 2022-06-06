import axios from 'axios';

export const server = axios.create({
    baseURL: 'https://mygamelistback-production.up.railway.app/'
})