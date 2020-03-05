import React from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import routes from '@/pages/main/routes';

const { SubMenu, Item } = Menu;

function Sidebar() {
    const { pathname } = useLocation();

    const menuRoutes = routes.filter((route) => route.name);
    const defaultOpenKeys = menuRoutes.map((route) => route.name);
    const selectedKeys = menuRoutes
        .flatMap((route) => route.routes)
        .reduce((acc, cur) => (matchPath(pathname, cur) ? acc.concat(cur.path) : acc), []);

    console.log('> defaultOpenKeys', defaultOpenKeys);
    console.log('> pathname', pathname);
    console.log('> selectedKeys', selectedKeys);

    return (
        <Menu
            mode="inline"
            defaultOpenKeys={defaultOpenKeys}
            selectedKeys={selectedKeys}
        >
            {
                menuRoutes.map((route) => (
                    <SubMenu key={route.name} title={<span>{route.name}</span>}>
                        {
                            route.routes
                                .filter((subRoute) => subRoute.name)
                                .map((subRoute) => (
                                    <Item key={subRoute.path}>
                                        <Link to={subRoute.path}>{subRoute.name}</Link>
                                    </Item>
                                ))
                        }
                    </SubMenu>
                ))
            }
        </Menu>
    );
}

export default Sidebar;
