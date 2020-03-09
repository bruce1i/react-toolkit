import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ForTest from './index';

test('my react component', () => {
    const { getByTestId, getByText } = render(<ForTest />);

    // 注意：toHaveTextContent是@testing-library/jest-dom里扩展的方法，在jest.setup.js里做了统一导入
    expect(getByTestId('count')).toHaveTextContent(0);

    fireEvent.click(getByText('Add Count'));

    expect(getByTestId('count')).toHaveTextContent(1);
});
