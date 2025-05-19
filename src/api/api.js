import axios from 'axios';
import { API_KEY } from '../lib/config';

const local = 'https://api.eflow.team/v1';
const api = axios.create({
    baseURL: `${local}`,
    withCredentials: true,
    headers: {
        'X-Eflow-API-Key': API_KEY
    }
});

export default api;
