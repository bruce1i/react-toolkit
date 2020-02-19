/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import SubRedux from '@/pages/main/my-redux/sub-redux';

function MyRedux(props) {
    const {
        test1,
        dispatch,
    } = props;
    console.log('> MyRedux props', props);
    console.log('> test1', test1);

    const handleChangeTest1ValueClick = () => {
        dispatch({
            type: 'changeTest1Value',
            payload: 'wow',
        });
    };

    return (
        <div>
            My Redux
            <div>
                <button type="button" onClick={handleChangeTest1ValueClick}>change test1 value to wow</button>
                <SubRedux superProps={props} a="abc" b />
            </div>
        </div>
    );
}

export default connect((state) => state)(MyRedux);
