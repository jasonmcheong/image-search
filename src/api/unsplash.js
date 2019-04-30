import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 215eb6a6fb4f779967d92d9f9b4344095834a419c87190300c47973f73ba6274',
    },
});
