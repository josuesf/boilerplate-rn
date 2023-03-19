import * as React from 'react';
import {ItemPoint} from './ItemPoint';
import {render, screen} from 'test-utils';

it('renders ItemPoint correctly', async () => {
  const itemProduct = {
    createdAt: '2022-12-09T10:20:00.909Z',
    product: 'Fantastic Granite Bacon',
    points: 200,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: false,
    id: '3',
  };
  const {queryByTestId} = render(
    <ItemPoint item={itemProduct} onPress={jest.fn} />,
  );
  expect(queryByTestId('item-name')).toHaveTextContent(itemProduct.product);
  expect(queryByTestId('item-date')).toHaveTextContent('9 de diciembre, 2022');
  expect(queryByTestId('item-points')).toHaveTextContent('+ 200');
  expect(screen.toJSON()).toMatchSnapshot();
});
