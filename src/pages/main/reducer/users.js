import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

/* eslint-disable no-param-reassign */
const { actions, name, reducer } = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUser(state, { payload }) {
            return payload;
        },
    },
});

export const { getUser } = actions;

export default [name, reducer];
