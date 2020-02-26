/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SubRedux from '@/pages/main/my-redux/sub-redux';
import { update, say, reset } from '@/pages/main/reducer/redux-actions-demo';
import thunk from '@/pages/main/thunk/redux-actions-demo';

const {
    asyncSay, promiseSay, goToAboutMe, goToAboutMe2,
} = thunk;

function MyRedux(props) {
    const history = useHistory();
    const {
        test,
        reduxActionsDemo,
        dispatch,
    } = props;
    console.log('> MyRedux props', props);
    console.log('> test', test);
    console.log('> reduxActionsDemo', reduxActionsDemo);

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

    const handleUpdateClick = () => {
        dispatch(update(Date.now()));
    };

    const handleSayClick = () => {
        console.log('> say', say);
        dispatch(say('haha, God.'));
    };

    const handleResetClick = () => {
        dispatch(reset());
    };

    const handleAsyncSayClick = () => {
        dispatch(asyncSay('wow, hello world!', () => {
            console.log('> done');
        }));
    };

    const handlePromiseSayClick = () => {
        dispatch(promiseSay('This is promise.'))
            .then(() => {
                console.log('> promise done');
            });
    };

    const handleGoToAboutMe = () => {
        dispatch(goToAboutMe());
    };

    const handleGoToAboutMe2 = () => {
        dispatch(goToAboutMe2(() => {
            history.push('/about-me');
        }));
    };

    return (
        <div>
            My Redux
            <div>
                <h3>test reducer</h3>
                <button type="button" onClick={handleChangeTestValueClick}>change test value to wow</button>
                <button type="button" onClick={handleResetTestValueClick}>reset test value</button>
                <hr />
                <h3>redux actions demo reducer</h3>
                <button type="button" onClick={handleUpdateClick}>update</button>
                <button type="button" onClick={handleSayClick}>say</button>
                <button type="button" onClick={handleResetClick}>reset</button>
                <hr />
                <hr />
                <h3>Thunk</h3>
                <button type="button" onClick={handleAsyncSayClick}>async say</button>
                <button type="button" onClick={handlePromiseSayClick}>promise say</button>
                <button type="button" onClick={handleGoToAboutMe}>go to About Me</button>
                <button type="button" onClick={handleGoToAboutMe2}>go to About Me2</button>
                <hr />
                <SubRedux superProps={props} a="abc" b />
            </div>
        </div>
    );
}

export default connect((state) => state)(MyRedux);
