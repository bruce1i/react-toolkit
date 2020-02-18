import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// components
import Demo from '@/pages/demo';

const routes = [
    {
        path: '/about-me',
        component: () => <div>I&#39;m Bruce.</div>,
    },
    {
        path: '/demo',
        component: Demo,
    },
];

function Main() {
    return (
        <div>
            <h1>Main Page</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/demo">Demo</Link></li>
            </ul>
            {renderRoutes(routes)}
        </div>
    );
}

export default Main;
