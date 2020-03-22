import React, {
    useState, useCallback, useRef, useContext,
} from 'react';
// import { connect } from 'react-redux';
import { PageState, withPageState } from './state';

import MyGetPageState from './get-page-state';

function MyPageState(props) {
    console.log('> props', props);
    const [count, setCount] = useState(1);
    const countRef = useRef({ a: 3 });
    const [pageState] = useContext(PageState);

    const resunt = useCallback(() => count, [count]);

    console.log('> result', resunt());

    const handleClick = () => {
        setCount(count + 1);
        countRef.current = { b: count };
    };

    return (
        <div>
            <h2>My Page State</h2>
            {count}
            ,
            {pageState.name}
            <br />
            <button type="button" onClick={handleClick}>Click</button>
            <div>
                <MyGetPageState />
            </div>
        </div>
    );
}

export default withPageState(MyPageState);
