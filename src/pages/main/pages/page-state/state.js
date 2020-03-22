import React, {
    createContext, useReducer, useState, useContext,
} from 'react';
import { connect } from 'react-redux';
import { reducer, initState } from './reducer';
import { createPageState } from './helper';

// todo: 使用bindPage和withPage来导入上下文

export const PageState = createContext(['has no context']);

export const withPageState = createPageState(PageState, reducer, initState);

export function withPageProvider(Component) {
    return function WrappedComponent() {
        const [PageContext] = useState(createContext(['No Context']));
        const [state, dispatch] = useReducer(reducer, initState);

        return (
            <PageContext.Provider value={[state, dispatch]}>
                <Component />
            </PageContext.Provider>
        );
    };
}

export function pageConnect(Component) {
    function WrappedComponent(props) {
        const [pageState, pageDispatch] = useContext(PageState);

        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...props} pageState={pageState} pageDispatch={pageDispatch} />;
    }

    return connect((state) => ({
        ...state,
        pageState: '',
        pageDispatch: '',
    }))(WrappedComponent);
}
