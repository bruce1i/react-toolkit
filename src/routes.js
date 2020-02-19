import { lazy } from 'react';
// components
const Demo = lazy(() => import('@/pages/demo'));
const Login = lazy(() => import('@/pages/login'));
const Main = lazy(() => import('@/pages/main'));

const routes = [
    {
        path: '/demo',
        component: Demo,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Main,
    },
];

export default routes;
