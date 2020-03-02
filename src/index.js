import React, { Suspense } from 'react';
import ReactDom from 'react-dom';

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

const $app = document.getElementById('app');
ReactDom.render(<App />, $app);
