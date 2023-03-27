import React from 'react';
import {HomeScreen} from './HomeScreen';
import {render, screen, act, fireEvent} from 'test-utils';
import dummyProducts from '__tests__/dummyProducts.json';
import {rest} from 'msw';
import {URL_PRODUCTS} from 'src/api/urls';
import {setupServer} from 'msw/node';
import {FormatDate} from 'src/common/utils/formats';

export const handlers = [
  rest.get(URL_PRODUCTS, (_req, res, ctx) => {
    return res(ctx.json(dummyProducts));
  }),
  rest.get(URL_PRODUCTS + '?is_redemption=false', (_req, res, ctx) => {
    return res(ctx.json(dummyProducts.filter(e => e.is_redemption === false)));
  }),
];

export const server = setupServer(...handlers);
describe('HomeScreen', function () {
  // Enable the API mocking before tests.
  beforeAll(() => {
    server.listen();
  });

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => {
    server.resetHandlers();
    // store.dispatch(apiSlice.util.resetApiState());
  });

  // Disable the API mocking after the tests finished.
  afterAll(() => server.close());

  test('Product find should display data product', async () => {
    const {queryByText, queryByTestId} = render(<HomeScreen />);
    // Show loading data
    expect(queryByTestId('loading')).toBeVisible();
    await act(() => {});
    const rgxName = new RegExp(dummyProducts[0].product, 'i');
    const rgxDate = new RegExp('9 de diciembre, 2022', 'i');
    expect(queryByText(rgxName)).toHaveTextContent(dummyProducts[0].product);
    expect(queryByText(rgxDate)).toHaveTextContent(
      FormatDate(new Date(dummyProducts[0].createdAt)),
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
  test('Show button all when filter is empty and the right Total Points', async () => {
    render(<HomeScreen />);
    const btnEarned = screen.getByTestId('btn-earned');
    expect(btnEarned).toBeVisible();
    expect(screen.getByTestId('btn-redemption')).toBeVisible();
    fireEvent.press(btnEarned);
    await act(() => {});
    expect(screen.getByTestId('btn-all')).toBeVisible();
    //...
  });
});
