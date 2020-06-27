import axios from 'axios';

const api = axios.create({
    baseURL: 'http://35.247.246.67:8000',
});

export default api
