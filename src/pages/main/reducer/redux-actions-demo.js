import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    time: undefined,
    hello: 'hi',
};

/* eslint-disable no-param-reassign */
const { actions, name, reducer } = createSlice({
    name: 'reduxActionsDemo',
    initialState,
    reducers: {
        update(state, { payload }) {
            state.time = payload;
        },
        say(state, { payload }) {
            state.hello = payload;
        },
        reset() {
            return { ...initialState };
        },
    },
});

export const {
    update,
    say,
    reset,
} = actions;

export default [name, reducer];
