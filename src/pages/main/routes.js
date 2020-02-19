import React from 'react';
// components
import MyRedux from '@/pages/main/my-redux';


const routes = [
    {
        path: '/about-me',
        component: () => <div>I&#39;m Bruce.</div>,
    },
    {
        path: '/my-redux',
        component: MyRedux,
    },
];

export default routes;
