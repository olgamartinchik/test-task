import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CurrencySelect from './CurrencySelect';
import store from '../../store/store';
import fetchMock from 'jest-fetch-mock';

describe('CurrencySelect component', () => {
  it('renders CurrencySelect component with open options', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: [
          { id: 'AED', name: 'United Arab Emirates Dirham', min_size: '0.01' },
          { id: 'AFN', name: 'Afghan Afghani', min_size: '0.01' },
        ],
      })
    );
    render(
      <Provider store={store}>
        <CurrencySelect isDropdownOpen={true} setIsDropdownOpen={() => {}} />
      </Provider>
    );
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    await waitFor(() => {
      const currencyList = screen.queryAllByTestId('currency');
      expect(currencyList.length).toBeGreaterThan(0);
      expect(currencyList[0]).toHaveTextContent('AED');
    });
  });
});
