import React from 'react';
import {HomeScreen} from './HomeScreen';
import {render, screen, act} from 'test-utils';
import dummyProducts from '__tests__/dummyProducts.json';
import {rest} from 'msw';
import {URL_PRODUCTS} from 'src/api/urls';
import {setupServer} from 'msw/node';
import {FormatDate} from 'src/common/utils/formats';

export const handlers = [
  rest.get(URL_PRODUCTS, (_req, res, ctx) => {
    return res(ctx.json(dummyProducts));
  }),
];

export const server = setupServer(...handlers);
describe('HomeScreen', function () {
  // Enable the API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => {
    server.resetHandlers();
    // store.dispatch(apiSlice.util.resetApiState());
  });

  // Disable the API mocking after the tests finished.
  afterAll(() => server.close());

  test('Product find should display image with proper source', async () => {
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
    // expect(getByAltText(rgxAlt)).toBeInTheDocument();
  });
});
