import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c09f4.firebaseio.com'
});

export default instance;