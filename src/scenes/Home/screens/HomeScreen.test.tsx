import * as React from 'react';
import {HomeScreen} from './HomeScreen';
import {render, screen} from 'test-utils';

it('renders ItemPoint correctly', async () => {
  const products = [
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 200,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '3',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 100,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 50,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
  ];
  jest.mock('src/api/productsApi', () => ({
    useGetProductsQuery: jest.fn(() => ({
      data: () => products,
      isFetching: false,
    })),
  }));
  render(<HomeScreen />);
  expect(screen.toJSON()).toMatchSnapshot();
});
