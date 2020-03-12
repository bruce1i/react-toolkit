import React, { useState } from 'react';

function Mode1() {
    const [count, setCount] = useState(0);

    const handleBtnClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Mode 1</h2>
            <p>
                hello world.
            </p>
            Count:
            {' '}
            <span>{count}</span>
            <br />
            <button type="button" onClick={handleBtnClick}>Click</button>
        </div>
    );
}

export default Mode1;
