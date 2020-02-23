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

export default {
    asyncSay,
};
