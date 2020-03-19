import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import thunk from '@/pages/main/thunk/users';

const { requestGetUser, postUser, pPostUser } = thunk;

function MockData(props) {
    const {
        users,
        dispatch,
    } = props;

    console.log('> props', props);

    useEffect(() => {
        dispatch(requestGetUser());
    }, []);

    const handleAddUserClick = () => {
        dispatch(postUser({
            name: 'Add Test', age: Math.floor((Math.random() * 100) + 1), gender: 'male',
        }));
    };

    const handlePAddUserClick = () => {
        pPostUser({
            name: 'Add Test', age: Math.floor((Math.random() * 100) + 1), gender: 'male',
        }).then(() => {
            dispatch(requestGetUser());
        });
    };

    return (
        <div>
            <h2>Mock Data</h2>
            {
                users.map((user) => (
                    <div key={user.id}>
                        {user.id}
                        /
                        {user.name}
                        /
                        {user.age}
                        /
                        {user.gender}
                    </div>
                ))
            }
            <div>
                <button type="button" onClick={handleAddUserClick}>Add User</button>
                <button type="button" onClick={handlePAddUserClick}>Promise Add User</button>
            </div>
        </div>
    );
}

MockData.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect((state) => state)(MockData);
