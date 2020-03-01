import React from 'react';

function TestChildren(props) {
    console.log('> props', props);
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    console.log('> props.children', props.children);
    return (
        <div>
            Test Children
            <br />
            {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
            {props.children}
        </div>
    );
}

export default TestChildren;
