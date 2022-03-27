import { http } from './config';

export default {
    listar:() => {
        return http.get('https://www.freetogame.com/api/games')
    }
}