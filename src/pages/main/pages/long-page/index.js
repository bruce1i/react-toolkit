import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunk from '@/pages/main/thunk/redux-actions-demo';
import * as actions from '@/pages/main/reducer/redux-actions-demo';

import style from './index.less';

const { promiseSay } = thunk;
const { update } = actions;

function LongPage(props) {
    console.log('> props', props);

    const {
        reduxActionsDemo,
        dispatch,
    } = props;

    console.log('> reduxActionsDemo', reduxActionsDemo);


    const handleSayHelloClick = () => {
        dispatch(promiseSay('hello'));
    };

    const handleUpdateClick = () => {
        dispatch(update(Date.now()));
    };

    return (
        <div className={style.main}>
            <h2>长页面</h2>
            <button type="button" onClick={handleSayHelloClick}>say hello</button>
            <button type="button" onClick={handleUpdateClick}>Update</button>
        </div>
    );
}

LongPage.propTypes = {
    reduxActionsDemo: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect((state) => state)(LongPage);
