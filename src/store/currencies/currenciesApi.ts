import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Currency {
  id: string;
  name: string;
  min_size: string;
}
interface Data {
  data: Currency[];
}
export const currenciesApi = createApi({
  reducerPath: 'currenciesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/v2/' }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<Data, void>({
      query: () => 'currencies',
    }),
  }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
