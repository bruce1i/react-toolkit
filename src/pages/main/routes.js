import React from 'react';
// components
import MyRedux from '@/pages/main/my-redux';
import UseReducerDemo from '@/pages/main/use-reducer';
import UseContextDemo from '@/pages/main/use-context';


const routes = [
    {
        path: '/about-me',
        component: () => <div>I&#39;m Bruce.</div>,
    },
    {
        path: '/my-redux',
        component: MyRedux,
    },
    {
        path: '/use-reducer',
        component: UseReducerDemo,
    },
    {
        path: '/use-context',
        component: UseContextDemo,
    },
];

export default routes;
