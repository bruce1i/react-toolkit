import React, { Suspense } from 'react';
import ReactDom from 'react-dom';

import {
    BrowserRouter,
    Link,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/routes';

function App() {
    console.log('> in App');
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/demo">Demo</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Main</Link></li>
                </ul>
            </div>
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
                {renderRoutes(routes)}
            </Suspense>

        </BrowserRouter>
    );
}

const $app = document.getElementById('app');
ReactDom.render(<App />, $app);
