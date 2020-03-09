import React, { useState } from 'react';
import style from './index.less';

function ForTest() {
    const [count, setCount] = useState(0);

    const handleAddCountClick = () => {
        setCount(count + 1);
    };

    return (
        <div className={style.main}>
            <h2>Test</h2>
            <div>
                count:
                {' '}
                <span data-testid="count" className={style.print}>{count}</span>
            </div>
            <button type="button" onClick={handleAddCountClick}>Add Count</button>
        </div>
    );
}

export default ForTest;
