import { createSlice } from '@reduxjs/toolkit';


export const initState = { name: 'Hi World.' };

export const { actions, reducer } = createSlice({
    name: 'page-state',
    initialState: initState,
    reducers: {
        bruce: () => ({ name: 'Bruce' }),
        tom: () => ({ name: 'Tom' }),
        user: (state, action) => ({ name: action.payload }),
    },
});

export const { bruce, tom, user } = actions;
