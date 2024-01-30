import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CurrenciesState {
  selectedCurrency: string | null;
}

const initialState: CurrenciesState = {
  selectedCurrency: null,
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    selectCurrency: (state, action: PayloadAction<string | null>) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { selectCurrency } = currenciesSlice.actions;

export const selectSelectedCurrency = (state: CurrenciesState) => state.selectedCurrency;
export default currenciesSlice.reducer;
