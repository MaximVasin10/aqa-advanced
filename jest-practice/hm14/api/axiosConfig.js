const axios = require('axios');


const axiosConfig = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000, // if the server does not respond within 5 seconds — we interrupt
});

axiosConfig.interceptors.request.use(config => {
    console.log(`Sending ${config.method.toUpperCase()} to ${config.url}`);
    return config;
});

axiosConfig.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
    }
);

module.exports = axiosConfig;