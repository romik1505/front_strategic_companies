import axios from 'axios';
import authHeader from '../store/auth.header';

const API_URL = 'http://localhost:8081/api/main/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }


}

export default new UserService();