import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://www.freetogame.com/api/games'
})