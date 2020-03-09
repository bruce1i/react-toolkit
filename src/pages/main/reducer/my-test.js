const initState = {
    count: 0,
    hello: 'hello',
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
    case 'hello':
        return { hello: payload, count: state.count + 1 };
    case 'reset':
        return { ...initState };
    default:
        return state;
    }
};

export default ['test', reducer];
