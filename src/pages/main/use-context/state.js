import React, { createContext, useReducer } from 'react';
import { reducer, initState } from './reducer';

export const PageState = createContext(['has no context']);

// export function Provider(props) {
//     const [state, dispatch] = useReducer(reducer, initState);
//
//     return (
//         <PageState.Provider value={[state, dispatch]}>
//             {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
//             {props.children}
//         </PageState.Provider>
//     );
// }

export function withPageProvider(Component) {
    return function WrappedComponent() {
        const [state, dispatch] = useReducer(reducer, initState);
        return (
            <PageState.Provider value={[state, dispatch]}>
                <Component />
            </PageState.Provider>
        );
    };
}
