import React from 'react';
import Mode1 from '@/pages/main/pages/hot-loader/mode-1';
import Mode2 from '@/pages/main/pages/hot-loader/mode-2';

function HotLoader() {
    return (
        <>
            <div>
                <h2>热加载</h2>
            </div>
            <Mode1 />
            <Mode2 />
        </>
    );
}

export default HotLoader;
