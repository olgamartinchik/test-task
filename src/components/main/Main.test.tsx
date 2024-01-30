import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Main from './Main';
import store from '../../store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';

describe('Main component', () => {
  it('renders Main component with mock data', async () => {
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
        <Main />
      </Provider>
    );

    expect(screen.getByText('CAT')).toBeInTheDocument();

    const arrowBtn = screen.getByTestId('arrow-btn');
    expect(arrowBtn).toBeInTheDocument();

    await userEvent.click(arrowBtn);

    await waitFor(() => {
      const currencyOptions = screen.getByTestId('currency-container');
      expect(currencyOptions).toBeInTheDocument();
    });

    await waitFor(() => {
      const currencyList = screen.queryAllByTestId('currency');
      expect(currencyList).toHaveLength(2);
      expect(currencyList[0]).toHaveTextContent('AED');
    });

    expect(fetchMock.mock.calls.length).toBe(1);
  });
});
