import React, { useContext } from 'react';
import TestChildren from '@/pages/main/use-context/components/test-children';
import { withPageProvider, PageState } from '@/pages/main/use-context/state';
import ShowContext from './components/show-context';

function UseContextDemo() {
    const [state] = useContext(PageState);

    console.log('> UseContextDemo state', state);

    return (
        <div>
            This is useContext Demo
            {' '}
            {state.name}
            <ShowContext />
            <TestChildren>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span>I'm a child.</span>
            </TestChildren>
        </div>
    );
}

export default withPageProvider(UseContextDemo);
