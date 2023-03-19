import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct} from 'src/common/models/Products';
import {URL_PRODUCTS} from './urls';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_PRODUCTS,
  }),
  endpoints: builder => ({
    getProducts: builder.query<Array<IProduct>, boolean | null>({
      query: value => (value != null ? `?is_redemption=${value}` : ''),
    }),
  }),
});
export const {useGetProductsQuery} = productsApi;
