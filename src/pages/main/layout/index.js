import React from 'react';

import style from './index.less';

function Layout() {
    return (
        <>
            <header className={style.header}>
                <div className={style.name}>React Toolkit</div>
            </header>
            <aside className={style.sidebar}>Sidebar</aside>
            <div className={style.main}>Main</div>
        </>
    );
}

export default Layout;
