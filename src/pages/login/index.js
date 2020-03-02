import React from 'react';
import PropTypes from 'prop-types';

function Login(props) {
    const { history } = props;

    const handleLoginClick = () => {
        history.push('/');
    };

    return (
        <div>
            <button type="button" onClick={handleLoginClick}>Login</button>
        </div>
    );
}

Login.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
