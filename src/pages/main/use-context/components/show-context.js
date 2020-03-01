import React, { useContext } from 'react';
import { PageState } from '@/pages/main/use-context/state';
import { bruce, tom, user } from '@/pages/main/use-context/reducer';
import { getUserInfo } from '../effect';

function ShowContext() {
    const [pageState, setPageState] = useContext(PageState);
    console.log('> component state', pageState);

    const handleBruceClickMe = () => {
        setPageState(bruce('aaa'));
    };

    const handleTomClickMe = () => {
        setPageState(tom());
    };

    const handleGetUser = () => {
        getUserInfo().then((data) => {
            console.log('> data', data);
            setPageState(user(data.user));
        });
    };

    return (
        <div>
            show context:
            {pageState.name}
            <br />
            <button type="button" onClick={handleBruceClickMe}>Click Bruce</button>
            <button type="button" onClick={handleTomClickMe}>Click Tom</button>
            <button type="button" onClick={handleGetUser}>Get User</button>
        </div>
    );
}

export default ShowContext;
