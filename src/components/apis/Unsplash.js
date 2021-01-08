import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.unsplash.com/search', 
    params: {
        client_id: '6M5cJQAfMVk2mhyW3lxNir5mLsZseq1nwNoJtTHhQ6E'
    }
});