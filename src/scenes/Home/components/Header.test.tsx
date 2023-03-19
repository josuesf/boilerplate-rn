import * as React from 'react';
import {Header} from './Header';
import {render, screen} from '__tests__/test-utils';

it('renders correctly', async () => {
  const nameExpected = 'Josue Farfan';
  const {queryByTestId} = render(<Header nameUser={nameExpected} />);
  expect(queryByTestId('name-user')).toHaveTextContent(nameExpected);
  expect(screen.toJSON()).toMatchSnapshot();
});
