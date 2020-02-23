import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import routes from '@/pages/main/routes';
import reducer from '@/pages/main/reducer';
// components
// code here...

console.log('> reuder', reducer);
const cr = combineReducers(reducer);
console.log('> cr', cr);

const store = createStore(cr, applyMiddleware(thunk));

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
