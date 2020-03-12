import { hot } from 'react-hot-loader/root';

import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '@/routes';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                {renderRoutes(routes)}
            </Suspense>
        </BrowserRouter>
    );
}

export default hot(App);
