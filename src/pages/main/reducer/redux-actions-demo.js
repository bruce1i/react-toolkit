import { createActions, handleActions } from 'redux-actions';

const name = 'reduxActionsDemo';

// action
export const {
    update,
    say,
    reset,
} = createActions('update', 'say', 'reset', { prefix: name });

// reducer
const initState = {
    time: undefined,
    hello: 'hi',
};

const reducer = handleActions({
    [update]: (state, { payload }) => ({ ...state, time: payload }),
    [say]: (state, { payload }) => ({ ...state, hello: payload }),
    [reset]: () => ({ ...initState }),
}, initState);

export default [name, reducer];
