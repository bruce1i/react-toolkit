import React from 'react';
import { Link } from 'react-router-dom';

function ChildrenPage() {
    return (
        <div>
            <h2>子页面</h2>
            <div>
                <Link to="/demo/children/inside">进入子页面</Link>
            </div>
        </div>
    );
}

export default ChildrenPage;
