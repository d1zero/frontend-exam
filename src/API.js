import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    headers: { 'Content-Type': 'application/json' },
});

export default instance;
