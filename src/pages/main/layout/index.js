import React from 'react';
import { renderRoutes } from 'react-router-config';

import routes from '@/pages/main/routes';
import style from './index.less';
import Sidebar from './sidebar';

function Layout() {
    return (
        <>
            <header className={style.header}>
                <div className={style.name}>React Toolkit</div>
            </header>
            <aside className={style.sidebar}>
                <Sidebar />
            </aside>
            <div className={style.main}>
                {renderRoutes(routes.flatMap((route) => route.routes))}
            </div>
        </>
    );
}

export default Layout;
