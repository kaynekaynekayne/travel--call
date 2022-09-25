import axios from 'axios';

const instance=axios.create({
    baseURL:'https://travel-call.herokuapp.com'
});

export default instance;