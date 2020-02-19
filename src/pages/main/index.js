import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '@/pages/main/routes';
// components
// code here...

const reducer = (preState, action) => {
    const defState = {
        test1: 'hello',
        test2: 'world',
    };

    switch (action.type) {
    case 'changeTest1Value':
        return { ...preState, test1: action.payload };
    case 'test2':
        return { ...preState, test2: action.payload };
    default:
        return defState;
    }
};

const store = createStore(reducer);

function Main() {
    return (
        <Provider store={store}>
            <div>
                <h1>Main Page</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/my-redux">My Redux</Link></li>
                </ul>
                {renderRoutes(routes)}
            </div>
        </Provider>
    );
}

export default Main;
