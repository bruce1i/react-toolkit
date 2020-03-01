import { createActions, handleActions } from 'redux-actions';

export const {
    bruce,
    tom,
    user,
} = createActions('bruce', 'tom', 'user');

console.log('> createActions', createActions('bruce', 'tom', 'Hello-World', 'is_ok'));

export const initState = { name: 'Hi World.' };

export const reducer = handleActions({
    [bruce]: () => ({ name: 'Bruce' }),
    [tom]: () => ({ name: 'Tom' }),
    [user]: (state, action) => ({ name: action.payload }),
}, initState);

// export function reducer(state, action) {
//     switch (action.type) {
//     case 'Bruce':
//         return { name: 'Bruce' };
//     case 'Tom':
//         return { name: 'Tom' };
//     default:
//         return { ...initState };
//     }
// }
