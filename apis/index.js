import axios from 'axios';

const instance=axios.create({
    baseURL:'http://apis.data.go.kr/1262000/LocalContactService2/getLocalContactList2'
});

export default instance;