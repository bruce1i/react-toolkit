import React from 'react';
import PropTypes from 'prop-types';

function TestChildren(props) {
    const { children } = props;
    console.log('> props', props);
    console.log('> props.children', children);
    return (
        <div>
            Test Children
            <br />
            {children}
        </div>
    );
}

TestChildren.propTypes = {
    children: PropTypes.element,
};

TestChildren.defaultProps = {
    children: <></>,
};

export default TestChildren;
