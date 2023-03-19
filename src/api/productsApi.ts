import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct} from 'src/common/models/Products';
import {URL_PRODUCTS} from './urls';

export const FILTERS = {
  earned: '?is_redemption=false',
  redemption: '?is_redemption=true',
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_PRODUCTS,
  }),
  endpoints: builder => ({
    getProducts: builder.query<Array<IProduct>, string>({
      query: filter => `${filter}`,
    }),
  }),
});
export const {useGetProductsQuery} = productsApi;
