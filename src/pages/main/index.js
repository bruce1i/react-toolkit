import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {
    createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import routes from '@/pages/main/routes';
import reducer from '@/pages/main/reducer';
import helloSaga from '@/pages/main/saga/hello';
// components
// code here...

console.log('> reuder', reducer);
const cr = combineReducers(reducer);
console.log('> cr', cr);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(cr, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(helloSaga);

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
