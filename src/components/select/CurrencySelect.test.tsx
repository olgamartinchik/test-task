import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CurrencySelect from './CurrencySelect';
import store from '../../store/store';
import userEvent from '@testing-library/user-event';

describe('CurrencySelect component', () => {
  it('renders CurrencySelect component with options', async () => {
    render(
      <Provider store={store}>
        <CurrencySelect isDropdownOpen={false} setIsDropdownOpen={() => {}} />
      </Provider>
    );
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDefined();

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});
