import { lazy } from 'react';
// components
const Login = lazy(() => import('@/pages/login'));
const Main = lazy(() => import('@/pages/main'));

const routes = [
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
