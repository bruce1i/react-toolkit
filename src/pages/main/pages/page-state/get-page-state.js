import React from 'react';
import PropTypes from 'prop-types';
import { pageConnect } from './state';

import { user } from './reducer';

function MyGetPageState(props) {
    console.log('> props', props);
    const {
        pageState,
        pageDispatch,
    } = props;
    // const [pageState, pageDispatch] = useContext(PageState);

    const handleClick = () => {
        pageDispatch(user('wow...'));
    };

    return (
        <div>
            <h3>My get page state</h3>
            <div>
                {pageState.name}
            </div>
            <br />
            <button type="button" onClick={handleClick}>Click</button>
        </div>
    );
}

MyGetPageState.propTypes = {
    pageState: PropTypes.objectOf(PropTypes.any).isRequired,
    pageDispatch: PropTypes.func.isRequired,
};

export default pageConnect(MyGetPageState);
