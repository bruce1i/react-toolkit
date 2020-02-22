/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import SubRedux from '@/pages/main/my-redux/sub-redux';

function MyRedux(props) {
    const {
        test,
        dispatch,
    } = props;
    console.log('> MyRedux props', props);
    console.log('> test', test);

    const handleChangeTestValueClick = () => {
        dispatch({
            type: 'hello',
            payload: 'wow',
        });
    };

    const handleResetTestValueClick = () => {
        dispatch({
            type: 'reset',
        });
    };

    return (
        <div>
            My Redux
            <div>
                <button type="button" onClick={handleChangeTestValueClick}>change test value to wow</button>
                <button type="button" onClick={handleResetTestValueClick}>reset test value</button>
                <SubRedux superProps={props} a="abc" b />
            </div>
        </div>
    );
}

export default connect((state) => state)(MyRedux);
