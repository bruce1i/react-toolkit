import axios from 'axios';
import { getUser } from '../reducer/users';

function requestGetUser() {
    return (dispatch) => {
        axios.get('/api/users')
            .then(({ data }) => {
                console.log('> data', data);
                dispatch(getUser(data.data));
            });
    };
}

function postUser(params) {
    return (dispatch) => {
        axios.post('/api/users', params)
            .then((res) => {
                console.log('> res', res);
                dispatch(requestGetUser());
            });
    };
}

function pPostUser(params) {
    return new Promise((resolve, reject) => {
        axios
            .post('/api/users', params)
            .then((res) => {
                console.log('> res', res);
                resolve();
            })
            .catch(() => {
                reject();
            });
    });
}

export default {
    requestGetUser,
    postUser,
    pPostUser,
};
