import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter,
    // Switch,
    // Route,
    Link,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// components
import Main from './pages/main';

const routes = [
    {
        path: '/sub/login',
        component: () => <div>path: /sub/login component</div>,
    },
    {
        path: '/',
        component: Main,
    },
];

function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/sub/login">Login</Link></li>
                    <li><Link to="/">Main</Link></li>
                </ul>
            </div>
            <hr />
            {renderRoutes(routes)}
        </BrowserRouter>
    );
}

const $app = document.getElementById('app');
ReactDom.render(<App />, $app);
