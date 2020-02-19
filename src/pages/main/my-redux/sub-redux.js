import React from 'react';
import { connect } from 'react-redux';

function SubRedux(props) {
    console.log('> SubRedux props', props);
    return (
        <div>Sub Redux</div>
    );
}

const mapState = (state) => state;

export default connect(mapState)(SubRedux);
