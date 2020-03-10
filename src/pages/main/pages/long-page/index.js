import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunk from '@/pages/main/thunk/redux-actions-demo';

import style from './index.less';

const { promiseSay } = thunk;

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

    return (
        <div className={style.main}>
            <h2>长页面</h2>
            <button type="button" onClick={handleSayHelloClick}>say hello</button>
        </div>
    );
}

LongPage.propTypes = {
    reduxActionsDemo: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect((state) => state)(LongPage);
