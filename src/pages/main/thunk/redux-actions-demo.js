import { useHistory } from 'react-router-dom';
import { say } from '@/pages/main/reducer/redux-actions-demo';

function asyncSay(word, callback) {
    return (dispatch, getState) => {
        console.log('> getState', getState());
        setTimeout(() => {
            console.log('> 来之3秒后的dispatch');
            dispatch(say(word));
            callback();
            console.log('> getState', getState());
        }, 3000);
    };
}

function promiseSay(word) {
    return (dispatch, getState) => {
        console.log('> old getState', getState());
        dispatch(say(word));
        console.log('> new getState', getState());

        return Promise.resolve();
    };
}

function goToAboutMe() {
    return () => {
        // 会报错，需要在组件中引用hook。
        const history = useHistory();
        history.push('/about-me');
    };
}

function goToAboutMe2(callback) {
    return () => {
        callback();
    };
}

export default {
    asyncSay,
    promiseSay,
    goToAboutMe,
    goToAboutMe2,
};
