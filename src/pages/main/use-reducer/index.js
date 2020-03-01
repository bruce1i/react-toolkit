import React, { useReducer } from 'react';

const initState = {
    count: 0,
};

const reducer = (state, action) => {
    console.log('> in action', action);
    return { count: state.count + 1 };
};

function UseReducerDemo() {
    console.log('> UseReducerDemo');
    // const [value, setValue] = useState('hello');
    const [state, dispatch] = useReducer(reducer, initState);
    const { count } = state;

    const handleClickMe = () => {
        console.log('> handleClickMe');
        // setValue(`wow${count}`);
        dispatch({ type: 'increment' });
    };

    return (
        <div>
            <div>
                count:
                <span>{count}</span>
            </div>
            <button type="button" onClick={handleClickMe}>click me</button>
        </div>
    );
}

export default UseReducerDemo;
