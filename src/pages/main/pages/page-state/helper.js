import React, { useReducer } from 'react';

export function createPageState(PageContext, reducer, initState) {
    return (Component) => (props) => {
        const [state, dispatch] = useReducer(reducer, initState);

        return (
            <PageContext.Provider value={[state, dispatch]}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...props} />
            </PageContext.Provider>
        );
    };
}

export const name = 'name';
