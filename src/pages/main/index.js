import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '@/pages/main/reducer';
import helloSaga from '@/pages/main/saga/hello';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
// components
import Layout from '@/pages/main/layout';

console.log('> reuder', reducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    // 如果不需要saga，middleware可以不用配置，默认包含了thunk
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(helloSaga);

function Main() {
    return (
        <Provider store={store}>
            {/* <div> */}
            {/*    <h1>Main Page</h1> */}
            {/*    <ul> */}
            {/*        <li><Link to="/">Home</Link></li> */}
            {/*        <li><Link to="/about-me">About Me</Link></li> */}
            {/*        <li><Link to="/my-redux">My Redux</Link></li> */}
            {/*        <li><Link to="/use-reducer">useReducer Demo</Link></li> */}
            {/*        <li><Link to="/use-context">useContext Demo</Link></li> */}
            {/*    </ul> */}
            {/*    {renderRoutes(routes)} */}
            {/* </div> */}
            <AntdConfigProvider locale={zhCN}>
                <Layout />
            </AntdConfigProvider>
        </Provider>
    );
}

export default Main;
