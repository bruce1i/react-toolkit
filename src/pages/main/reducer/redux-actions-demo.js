import { createActions } from 'redux-actions';
import { createReducer } from '@reduxjs/toolkit';

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

/* eslint-disable no-param-reassign */
const reducer = createReducer(initState, {
    [update]: (state, { payload }) => {
        state.time = payload;
    },
    [say]: (state, { payload }) => {
        state.hello = payload;
    },
    [reset]: () => ({ ...initState }),
});

export default [name, reducer];
