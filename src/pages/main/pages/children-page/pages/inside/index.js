import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

function ChildrenInside(props) {
    const { history } = props;

    const handleGoBackClick = () => {
        history.goBack();
    };

    return (
        <div>
            <h3>这里是子页面内页，并没有在菜单栏中显示。</h3>
            <Button type="link" onClick={handleGoBackClick}>返回上一页</Button>
        </div>
    );
}

ChildrenInside.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChildrenInside;
