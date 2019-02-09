import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.giphy.com/v1',
    params: {
        api_key: 'OHZfZQtidaUxpPxPoAWCxyWzoZZ4N97X'
    }
});
