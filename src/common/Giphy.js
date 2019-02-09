import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    params: {
        api_key: 'OHZfZQtidaUxpPxPoAWCxyWzoZZ4N97X'
    }
});
