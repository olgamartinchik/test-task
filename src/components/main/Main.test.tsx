import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Main from './Main';
import store from '../../store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('Main component', () => {
  it('renders Main component', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const mainElement = screen.getByTestId('main-component');
    expect(mainElement).toBeInTheDocument();
  });
  it('renders Main component', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const arrowBtn = screen.getByTestId('arrow-btn');

    expect(arrowBtn).toBeInTheDocument();

    await userEvent.click(arrowBtn);

    await waitFor(() => {
      const currencyOptions = screen.getByTestId('currency-container');
      expect(currencyOptions).toBeInTheDocument();
    });
  });
});
