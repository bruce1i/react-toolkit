import React from 'react';
import { Redirect } from 'react-router-dom';
// components
// import MyRedux from '@/pages/main/my-redux';
// import UseReducerDemo from '@/pages/main/use-reducer';
// import UseContextDemo from '@/pages/main/use-context';
import LongPage from '@/pages/main/pages/long-page';
import ChildrenPage from '@/pages/main/pages/children-page';
import ChildrenInside from '@/pages/main/pages/children-page/pages/inside';
import MultiBlock from '@/pages/main/pages/multi-block';
import I18n from '@/pages/main/pages/i18n';
import ForTest from '@/pages/main/pages/for-test';

const routes = [
    {
        // 重定向的路由，必须定义在最上面
        routes: [
            {
                path: '/',
                exact: true,
                component: () => <Redirect to="/demo/long-page" />,
            },
        ],
    },
    {
        name: 'Demo',
        routes: [
            {
                name: '长页面',
                path: '/demo/long-page',
                component: LongPage,
            },
            {
                path: '/demo/children/inside',
                component: ChildrenInside,
            },
            {
                name: '子页面',
                path: '/demo/children',
                component: ChildrenPage,
            },
            {
                name: '多区块',
                path: '/demo/multi-block',
                component: MultiBlock,
            },
            {
                name: '国际化',
                path: '/demo/i18n',
                component: I18n,
            },
            {
                name: '测试',
                path: '/demo/test',
                component: ForTest,
            },
            {
                path: '/demo/no-name',
                component: () => <div>No Name</div>,
            },
        ],
    },
    {
        name: '其他',
        routes: [
            {
                name: '关于',
                path: '/other/about',
                component: () => <div>About</div>,
            },
        ],
    },
    {
        // 404，必须定义在最下面
        routes: [
            {
                path: '',
                component: () => <div>404</div>,
            },
        ],
    },
];


// const routes = [
//     {
//         path: '/about-me',
//         component: () => <div>I&#39;m Bruce.</div>,
//     },
//     {
//         path: '/my-redux',
//         component: MyRedux,
//     },
//     {
//         path: '/use-reducer',
//         component: UseReducerDemo,
//     },
//     {
//         path: '/use-context',
//         component: UseContextDemo,
//     },
// ];

export default routes;
