import React from 'react';
import {HomeScreen} from './HomeScreen';
import {render, screen, act, fireEvent} from 'test-utils';
import dummyProducts from '__tests__/dummyProducts.json';
import {rest} from 'msw';
import {URL_PRODUCTS} from 'src/api/urls';
import {setupServer} from 'msw/node';
import {FormatDate} from 'src/common/utils/Formats';

export const handlers = [
  rest.get(URL_PRODUCTS, (_req, res, ctx) => {
    const filter = _req.url.searchParams.get('is_redemption');
    const data = filter
      ? dummyProducts.filter(e => e.is_redemption === JSON.parse(filter))
      : dummyProducts;
    return res(ctx.json(data));
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
    expect(screen.getByText('50.00 pts')).toBeVisible();
  });
  test('Show button all when filter is empty and the right Total Points', async () => {
    render(<HomeScreen />);
    const {getByTestId} = screen;
    const btnEarned = screen.getByTestId('btn-earned');
    expect(btnEarned).toBeVisible();
    expect(screen.getByTestId('btn-redemption')).toBeVisible();
    fireEvent.press(btnEarned);
    expect(getByTestId('loading')).toBeVisible();
    await act(() => {});
    expect(screen.getByTestId('btn-all')).toBeVisible();
    expect(screen.getByText('200.00 pts')).toBeVisible();
  });
});
