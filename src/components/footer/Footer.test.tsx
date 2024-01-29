import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Footer from './Footer';
import { RootState } from '../../store/store';

const mockStore = configureStore();

test('renders Footer with selected currency', () => {
  const selectedCurrency = 'USD';

  const store = mockStore();

  render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );

  const footerElement = screen.getByText(`Russian ${selectedCurrency.toLowerCase()}`);
  expect(footerElement).toBeInTheDocument();
});
