import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            "Client-ID a1008e16014c3643e7250ed7845fdb78c82a19bca75852b30da888c5af7e10f7"
    }
});