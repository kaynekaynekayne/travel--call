import axios from 'axios';

const instance=axios.create({
    // baseURL:'http://localhost:4014'
    baseURL:'https://travel-call.herokuapp.com'
});

export default instance;